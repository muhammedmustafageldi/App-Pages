// Base template system
class PageTemplate {
    constructor(config) {
        this.title = config.title || 'Swanky Software';
        this.description = config.description || '';
        this.headerTitle = config.headerTitle || 'Swanky Software';
        this.headerSubtitle = config.headerSubtitle || '';
        this.extraCSS = config.extraCSS || [];
        this.extraJS = config.extraJS || [];
    }

    render() {
        // Set page title
        document.title = this.title;
        
        // Set meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', this.description);
        }

        // Load extra CSS files
        this.extraCSS.forEach(cssFile => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = cssFile;
            document.head.appendChild(link);
        });

        // Load extra JS files
        this.extraJS.forEach(jsFile => {
            const script = document.createElement('script');
            script.src = jsFile;
            document.head.appendChild(script);
        });

        // Update header if exists
        const headerTitle = document.querySelector('.header h1');
        const headerSubtitle = document.querySelector('.header p');
        
        if (headerTitle && this.headerTitle) {
            headerTitle.textContent = this.headerTitle;
        }
        
        if (headerSubtitle && this.headerSubtitle) {
            headerSubtitle.textContent = this.headerSubtitle;
        }

        // Insert footer
        this.insertFooter();
    }

    insertFooter() {
        const footerHTML = `
            <footer class="footer">
                <p>© 2025 Muhammed Mustafa Geldi | Swanky Software | Türkiye</p>
                <p><a href="index.html">← Ana Sayfaya Dön</a></p>
            </footer>
        `;

        const existingFooter = document.querySelector('.footer');
        if (existingFooter) {
            existingFooter.outerHTML = footerHTML;
        } else {
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }
    }
}

// Initialize page template when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (window.pageConfig) {
        const template = new PageTemplate(window.pageConfig);
        template.render();
    }
});