// i18n - Internationalization Module
const i18n = {
    currentLang: 'tr',
    translations: {},
    
    async init() {
        // Get saved language or detect from browser
        const saved = localStorage.getItem('lang');
        if (saved) {
            this.currentLang = saved;
        } else {
            // Detect browser language
            const browserLang = navigator.language.slice(0, 2);
            this.currentLang = browserLang === 'en' ? 'en' : 'tr';
        }
        
        // Load translations
        await this.loadTranslations(this.currentLang);
        this.applyTranslations();
        this.updateLangButton();
        document.documentElement.lang = this.currentLang;
    },
    
    async loadTranslations(lang) {
        try {
            const response = await fetch(`js/lang/${lang}.json`);
            this.translations = await response.json();
        } catch (e) {
            console.error('Failed to load translations:', e);
            // Fallback to Turkish
            if (lang !== 'tr') {
                await this.loadTranslations('tr');
            }
        }
    },
    
    async setLang(lang) {
        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        await this.loadTranslations(lang);
        this.applyTranslations();
        this.updateLangButton();
        document.documentElement.lang = lang;
        
        // Dispatch event for page-specific handlers
        window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
    },
    
    toggle() {
        const newLang = this.currentLang === 'tr' ? 'en' : 'tr';
        this.setLang(newLang);
    },
    
    t(key) {
        // Get nested value: "hero.title" -> translations.hero.title
        const keys = key.split('.');
        let value = this.translations;
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                return key; // Return key if not found
            }
        }
        return value;
    },
    
    applyTranslations() {
        // Apply to elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);
            if (translation && translation !== key) {
                el.textContent = translation;
            }
        });
        
        // Apply to elements with data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = this.t(key);
            if (translation && translation !== key) {
                el.placeholder = translation;
            }
        });
        
        // Update page title if on index
        if (document.querySelector('.hero-section')) {
            document.title = this.t('site.title');
        }
    },
    
    updateLangButton() {
        const btn = document.getElementById('langToggle');
        if (btn) {
            btn.textContent = this.currentLang === 'tr' ? '🇬🇧' : '🇹🇷';
            btn.title = this.currentLang === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç';
        }
    },
    
    getLang() {
        return this.currentLang;
    }
};

// Auto-init when DOM ready
document.addEventListener('DOMContentLoaded', () => i18n.init());

// Export for global use
window.i18n = i18n;
