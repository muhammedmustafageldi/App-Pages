// Modern Common JS for Swanky Software

/**
 * Page Config Interface
 * @typedef {Object} PageConfig
 * @property {string} title - Page title
 * @property {string} description - Meta description
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Page Features
    initializePage();

    // 2. Initialize Dark Mode
    initializeDarkMode();

    // 3. Initialize Table of Contents (for policy pages)
    if (document.querySelector('.policy-layout')) {
        initializeTOC();
    }
});

function initializePage() {
    // Set dynamic page title if config exists
    if (window.pageConfig) {
        document.title = window.pageConfig.title || document.title;

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && window.pageConfig.description) {
            metaDesc.setAttribute('content', window.pageConfig.description);
        }
    }

    // Add current year to footer automatically if placeholder exists
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

function initializeDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Check saved theme or system preference
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Add Toggle Button and Contact Link to Header
    const headerInner = document.querySelector('.header-inner');
    if (headerInner) {
        // Create or find Nav container
        let nav = headerInner.querySelector('.header-nav');
        if (!nav) {
            nav = document.createElement('nav');
            nav.className = 'header-nav';
            nav.style.display = 'flex';
            nav.style.alignItems = 'center';
            nav.style.gap = '1.5rem';
            headerInner.appendChild(nav);
        }

        // Add Contact Link (if not exists)
        if (!nav.querySelector('a[href^="mailto"]')) {
            const contactLink = document.createElement('a');
            contactLink.href = 'mailto:swankysoftware@gmail.com';
            contactLink.textContent = 'İletişim';
            contactLink.style.fontSize = '0.95rem';
            contactLink.style.fontWeight = '500';
            contactLink.style.color = 'var(--text-secondary)';
            contactLink.style.textDecoration = 'none';
            contactLink.className = 'nav-link';
            contactLink.onmouseover = () => contactLink.style.color = 'var(--primary-color)';
            contactLink.onmouseout = () => contactLink.style.color = 'var(--text-secondary)';
            nav.appendChild(contactLink);
        }

        // Add Toggle Button (if not exists)
        if (!nav.querySelector('.theme-toggle')) {
            const btn = document.createElement('button');
            btn.className = 'theme-toggle';
            btn.innerHTML = '🌓'; // Icon
            btn.title = 'Karanlık Modu Aç/Kapat';
            btn.style.background = 'transparent';
            btn.style.border = '1px solid var(--border-color)';
            btn.style.padding = '0.4rem 0.6rem';
            btn.style.borderRadius = 'var(--radius-md)';
            btn.style.cursor = 'pointer';
            btn.style.fontSize = '1.1rem';
            btn.style.color = 'var(--text-primary)';
            btn.style.marginLeft = '0.5rem';
            btn.style.transition = 'all 0.2s';

            btn.onmouseover = () => btn.style.borderColor = 'var(--primary-color)';
            btn.onmouseout = () => btn.style.borderColor = 'var(--border-color)';

            btn.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
            });

            nav.appendChild(btn);
        }
    }
}

/**
 * Initializes the Table of Contents and Scroll Spy
 */
function initializeTOC() {
    const contentArea = document.querySelector('.content-area');
    const tocSidebar = document.querySelector('.toc-sidebar');

    // We expect the download button might be there first, so appended TOC should go after or we clear and rebuild safely
    const existingDownloadBtn = tocSidebar ? tocSidebar.querySelector('.download-btn-sidebar') : null;

    if (!contentArea || !tocSidebar) return;

    // Create TOC Container
    const tocNav = document.createElement('nav');
    tocNav.className = 'toc-nav';

    const tocHeader = document.createElement('span');
    tocHeader.className = 'toc-header';
    tocHeader.textContent = 'İçindekiler';
    tocNav.appendChild(tocHeader);

    const tocList = document.createElement('div');
    tocList.className = 'toc-list';
    tocNav.appendChild(tocList);

    // Find all Headings (h2, h3)
    const headings = contentArea.querySelectorAll('h2, h3');
    const tocLinks = [];

    headings.forEach((heading, index) => {
        // Ensure heading has an ID
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }

        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.className = 'toc-link';
        link.textContent = heading.textContent;
        link.dataset.target = heading.id;

        // Indent H3s
        if (heading.tagName === 'H3') {
            link.style.paddingLeft = '1.5rem';
            link.style.fontSize = '0.85rem';
        }

        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Smooth scroll with offset for fixed header
            const targetElement = document.getElementById(heading.id);
            if (targetElement) {
                const headerOffset = 85;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Update URL hash without jumping
                history.pushState(null, null, `#${heading.id}`);
            }

            // Close mobile menu if open
            if (window.innerWidth < 850) {
                tocSidebar.classList.remove('active');
            }
        });

        tocList.appendChild(link);
        tocLinks.push({ link, target: heading });
    });

    // Clear sidebar BUT keep download button if exists
    tocSidebar.innerHTML = '';
    if (existingDownloadBtn) {
        tocSidebar.appendChild(existingDownloadBtn);
    }
    tocSidebar.appendChild(tocNav);

    // Mobile Toggle
    createMobileToggle(tocSidebar);

    // Scroll Spy
    setupScrollSpy(tocLinks);
}

function createMobileToggle(sidebar) {
    const wrapper = document.querySelector('.policy-layout');

    // Check if toggle already exists (to prevent dupes)
    if (document.querySelector('.mobile-toc-toggle')) return;

    const toggleBtn = document.createElement('div');
    toggleBtn.className = 'mobile-toc-toggle';
    toggleBtn.textContent = 'İçindekiler';

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Insert before sidebar
    wrapper.insertBefore(toggleBtn, sidebar);
}

function setupScrollSpy(tocLinks) {
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -80% 0px', // Trigger when near top
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active from all
                tocLinks.forEach(item => item.link.classList.remove('active'));

                // Add active to current
                const activeLink = tocLinks.find(item => item.target === entry.target);
                if (activeLink) {
                    activeLink.link.classList.add('active');

                    // Scroll TOC to keep active link in view
                    activeLink.link.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }
            }
        });
    }, observerOptions);

    tocLinks.forEach(item => observer.observe(item.target));
}