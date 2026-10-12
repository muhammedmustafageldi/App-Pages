#!/usr/bin/env python3
"""Build Quitify legal pages and optional offline Android documents from shared sources.

Run: python3 scripts/build-quitify-pages.py --app-assets /path/to/Quitify/app/src/main/assets
"""
import argparse
import json
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://muhammedmustafageldi.github.io/App-Pages/'
texts = json.loads((ROOT / 'content/quitify-policy.json').read_text(encoding='utf-8'))
terms_texts = json.loads((ROOT / 'content/quitify-terms.json').read_text(encoding='utf-8'))

def content(t, page='privacy', navigation=None):
    navigation = navigation or t
    sections = t['deletion'] if page == 'deletion' else t['sections']
    parts = [f'<p class="policy-date">{escape(t["date"])}</p>']
    if page != 'deletion':
        related_page = 'privacy-policy' if page == 'terms' else 'terms-of-service'
        related_title = navigation['title'] if page == 'terms' else navigation['termsTitle']
        parts.append(f'<p class="highlight-box"><a href="quitify-{related_page}.html">{escape(related_title)}</a> · <a href="quitify-delete-account.html">{escape(navigation["deleteLink"])}</a></p>')
    for i, (heading, body) in enumerate(sections, 1):
        anchor = 'data-deletion' if page == 'deletion' and i == 3 else f'section-{i}'
        parts.append(f'<h2 id="{anchor}">{i}. {escape(heading)}</h2>\n<p>{body}</p>')
    if page == 'deletion':
        parts.append(f'<p><a href="quitify-privacy-policy.html">{escape(t["title"])}</a> · <a href="quitify-terms-of-service.html">{escape(t["termsTitle"])}</a></p>')
    return '\n'.join(parts)

for lang, t in texts.items():
    t['termsTitle'] = terms_texts[lang]['title']
    t['termsOnline'] = terms_texts[lang]['online']
    t['contentHtml'] = content(t)
    t['deletionHtml'] = content(t, 'deletion')
    t['termsHtml'] = content(terms_texts[lang], 'terms', navigation=t)

pages = {
    'privacy': ('quitify-privacy-policy.html', 'title', 'contentHtml'),
    'deletion': ('quitify-delete-account.html', 'deleteTitle', 'deletionHtml'),
    'terms': ('quitify-terms-of-service.html', 'termsTitle', 'termsHtml'),
}
for page_kind, (filename, title_key, content_key) in pages.items():
    t = texts['tr']
    title = t[title_key]
    page = f'''<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{escape(title)}</title>
    <meta name="description" content="Quitify kullanım koşulları, gizlilik, bulut yedekleme ve hesap/veri silme bilgileri.">
    <link rel="canonical" href="{BASE}{filename}">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/policy.css">
    <link rel="icon" type="image/png" href="app_logo/quitify_logo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body class="policy-page" data-quitify-page="{page_kind}">
    <header class="site-header">
        <div class="container header-inner">
            <a href="index.html" class="brand-logo"><img src="other_icons/swanky_logo.png?v=3" alt="Logo" width="32" height="32" style="border-radius:6px">Swanky Software</a>
            <nav class="header-nav">
                <a href="mailto:swankydata9@gmail.com" class="nav-link">İletişim</a>
                <button id="langToggle" class="lang-toggle" type="button" title="Switch to English" aria-label="Switch to English">🇬🇧</button>
            </nav>
        </div>
    </header>
    <main class="page-wrapper">
        <div class="container policy-layout">
            <aside class="toc-sidebar"><a href="https://play.google.com/store/apps/details?id=com.swanky.quitify" class="download-btn-sidebar">{escape(t['download'])}</a></aside>
            <article class="content-area">
                <a href="index.html" class="back-link">{escape(t['back'])}</a>
                <h1>{escape(title)}</h1>
                <div id="quitifyContentContainer">{t[content_key]}</div>
            </article>
        </div>
    </main>
    <footer class="site-footer"><div class="container footer-inner"><p id="quitifyFooter">{escape(t['footer'])}</p></div></footer>
    <script src="js/i18n.js"></script>
    <script src="js/common.js"></script>
    <script src="js/quitify-i18n.js"></script>
</body>
</html>
'''
    (ROOT / filename).write_text(page, encoding='utf-8')

controller = r'''
// Generated from content/quitify-policy.json and content/quitify-terms.json.
function applyQuitifyTranslations(language) {
    const lang = Object.hasOwn(quitifyTranslations, language) ? language : 'en';
    const t = quitifyTranslations[lang];
    const page = document.body.dataset.quitifyPage;
    const titleKey = { privacy: 'title', deletion: 'deleteTitle', terms: 'termsTitle' }[page];
    const contentKey = { privacy: 'contentHtml', deletion: 'deletionHtml', terms: 'termsHtml' }[page];
    const container = document.getElementById('quitifyContentContainer');
    if (!container) return;
    container.innerHTML = t[contentKey];
    document.title = t[titleKey];
    document.documentElement.lang = lang;
    document.querySelector('article h1').textContent = document.title;
    document.querySelector('.back-link').textContent = t.back;
    document.getElementById('quitifyFooter').textContent = t.footer;
    const languageButton = document.getElementById('langToggle');
    const nextLanguage = { tr: 'en', en: 'de', de: 'tr' }[lang];
    const languageLabels = { tr: "Türkçe'ye geç", en: 'Switch to English', de: 'Auf Deutsch wechseln' };
    languageButton.dataset.nextLanguage = nextLanguage;
    languageButton.textContent = { tr: '🇹🇷', en: '🇬🇧', de: '🇩🇪' }[nextLanguage];
    languageButton.title = languageLabels[nextLanguage];
    languageButton.setAttribute('aria-label', languageLabels[nextLanguage]);
    const contact = document.querySelector('.header-nav a[href^="mailto"]');
    if (contact) {
        contact.textContent = { tr: 'İletişim', en: 'Contact', de: 'Kontakt' }[lang];
        contact.href = 'mailto:swankydata9@gmail.com';
        contact.removeAttribute('data-i18n');
    }
    container.querySelectorAll('a[href^="quitify-"]').forEach(link => {
        const url = new URL(link.getAttribute('href'), location.href);
        url.searchParams.set('lang', lang);
        link.href = url.href;
    });
    const sidebar = document.querySelector('.toc-sidebar');
    const download = sidebar.querySelector('.download-btn-sidebar');
    download.textContent = t.download;
    sidebar.replaceChildren(download);
    if (typeof initializeTOC === 'function') initializeTOC();
    sidebar.querySelector('.toc-header')?.removeAttribute('data-i18n');
    const tocTitle = { tr: 'İçindekiler', en: 'Contents', de: 'Inhalt' }[lang];
    const heading = sidebar.querySelector('.toc-header');
    if (heading) heading.textContent = tocTitle;
    const mobileToc = document.querySelector('.mobile-toc-toggle');
    if (mobileToc) { mobileToc.textContent = tocTitle; mobileToc.removeAttribute('data-i18n'); }
}
let quitifyLanguage = new URLSearchParams(location.search).get('lang');
window.addEventListener('langChanged', event => {
    if (!event.detail?.initial) quitifyLanguage = event.detail?.lang;
    // Apply after the shared site's language handlers so explicit ?lang=de stays consistent.
    queueMicrotask(() => applyQuitifyTranslations(quitifyLanguage || window.i18n?.getLang() || 'tr'));
});
document.addEventListener('DOMContentLoaded', () => {
    applyQuitifyTranslations(quitifyLanguage || window.i18n?.getLang() || 'tr');
    document.getElementById('langToggle').addEventListener('click', event => {
        quitifyLanguage = event.currentTarget.dataset.nextLanguage;
        const url = new URL(location.href);
        url.searchParams.set('lang', quitifyLanguage);
        history.replaceState(null, '', url);
        applyQuitifyTranslations(quitifyLanguage);
    });
});
'''
(ROOT / 'js/quitify-i18n.js').write_text('const quitifyTranslations = '+json.dumps(texts, ensure_ascii=False, indent=2)+';\n'+controller, encoding='utf-8')

parser = argparse.ArgumentParser()
parser.add_argument('--app-assets', type=Path)
args = parser.parse_args()
if args.app_assets:
    for lang, t in texts.items():
        for page_kind, asset_prefix, online_key in (('privacy', 'privacy_policy', 'online'), ('terms', 'terms_of_service', 'termsOnline')):
            filename, title_key, content_key = pages[page_kind]
            url = f'{BASE}{filename}?lang={lang}'
            body = f'<p><a href="{url}">{escape(t[online_key])}</a></p>\n'+t[content_key]
            for related_filename, _, _ in pages.values():
                body = body.replace(f'href="{related_filename}"', f'href="{BASE}{related_filename}?lang={lang}"')
            page = f'''<!DOCTYPE html>
<html lang="{lang}"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{escape(t[title_key])}</title><style>body{{margin:16px;font-family:sans-serif;line-height:1.6;overflow-wrap:anywhere}}h1{{font-size:1.6rem}}h2{{font-size:1.2rem;margin-top:1.6rem}}a{{color:#805000}}.highlight-box{{padding:12px;background:#fff1d6}}</style></head><body><h1>{escape(t[title_key])}</h1>{body}</body></html>
'''
            (args.app_assets / f'{asset_prefix}_{lang}.html').write_text(page, encoding='utf-8')
print('Built privacy/terms/deletion pages, web translations'+(' and Android offline documents.' if args.app_assets else '.'))
