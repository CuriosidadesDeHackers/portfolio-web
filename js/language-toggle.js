/**
 * Language Toggle Component
 * Handles language switching functionality for the website
 */

import translations from './translations.js';

class LanguageToggle {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'es';
        this.translations = translations;
        this.translatedElements = [];
        
        // Initialize the language
        this.initLanguage();
    }
    
    /**
     * Initialize language settings and create language toggle button
     */
    initLanguage() {
        // Set initial language
        document.documentElement.lang = this.currentLanguage;
        
        // Create and add the language toggle button
        this.createLanguageToggle();
        
        // Find all elements with data-i18n attribute
        this.collectTranslatableElements();
        
        // Apply translations
        this.translatePage();
        
        // Listen for language change events
        document.addEventListener('languageChanged', () => {
            this.translatePage();
        });
    }
    
    /**
     * Create the language toggle button and add it to the page
     */
    createLanguageToggle() {
        const navbar = document.querySelector('.navbar');
        
        if (!navbar) return;
        
        // Create the language toggle container
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'language-toggle';
        
        // Create the toggle button
        const toggleButton = document.createElement('button');
        toggleButton.className = 'language-btn';
        toggleButton.setAttribute('aria-label', this.translations[this.currentLanguage].language);
        toggleButton.setAttribute('aria-haspopup', 'true');
        toggleButton.setAttribute('aria-expanded', 'false');
        
        // Create the button inner content
        toggleButton.innerHTML = `
            <span class="language-globe">
                <i class="fas fa-globe"></i>
            </span>
            <span class="language-text">${this.currentLanguage.toUpperCase()}</span>
        `;
        
        // Create dropdown menu
        const dropdownMenu = document.createElement('div');
        dropdownMenu.className = 'language-dropdown';
        
        // Add language options
        const languages = [
            { code: 'en', label: this.translations[this.currentLanguage].en },
            { code: 'es', label: this.translations[this.currentLanguage].es }
        ];
        
        languages.forEach(lang => {
            const option = document.createElement('button');
            option.className = `language-option ${lang.code === this.currentLanguage ? 'active' : ''}`;
            option.setAttribute('data-lang', lang.code);
            option.innerHTML = lang.label;
            
            option.addEventListener('click', () => {
                this.setLanguage(lang.code);
                document.querySelectorAll('.language-option').forEach(el => {
                    el.classList.toggle('active', el.getAttribute('data-lang') === lang.code);
                });
                dropdownMenu.classList.remove('show');
                toggleButton.setAttribute('aria-expanded', 'false');
            });
            
            dropdownMenu.appendChild(option);
        });
        
        // Toggle dropdown on button click
        toggleButton.addEventListener('click', () => {
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
            toggleButton.setAttribute('aria-expanded', !isExpanded);
            dropdownMenu.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!toggleContainer.contains(e.target)) {
                dropdownMenu.classList.remove('show');
                toggleButton.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Add button and dropdown to container
        toggleContainer.appendChild(toggleButton);
        toggleContainer.appendChild(dropdownMenu);
        
        // Add the toggle before the menu toggle button
        const menuToggle = navbar.querySelector('.menu-toggle');
        navbar.insertBefore(toggleContainer, menuToggle);
    }
    
    /**
     * Find all elements with data-i18n attribute
     */
    collectTranslatableElements() {
        // Add data-i18n attributes to elements
        this.addTranslationAttributes();
        
        // Collect all elements with data-i18n attribute
        this.translatedElements = document.querySelectorAll('[data-i18n]');
    }
    
    /**
     * Add data-i18n attributes to translatable elements
     */
    addTranslationAttributes() {
        // Header navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === 'https://curiosidadesdehackers.com/') {
                link.setAttribute('data-i18n', 'web_main');
            } else if (href === '#about') {
                link.setAttribute('data-i18n', 'about_me');
            } else if (href === '#bounty') {
                link.setAttribute('data-i18n', 'bug_bounty');
            } else if (href === '#projects') {
                link.setAttribute('data-i18n', 'projects');
            } else if (href === '#contact') {
                link.setAttribute('data-i18n', 'contact');
            }
        });
        
        // Hero section
        const heroDescription = document.querySelector('.hero-description');
        if (heroDescription) {
            heroDescription.setAttribute('data-i18n', 'hero_description');
        }
        
        const heroButtons = document.querySelectorAll('.hero-buttons .btn');
        if (heroButtons.length > 0) {
            heroButtons[0].setAttribute('data-i18n', 'contact_btn');
            heroButtons[1].setAttribute('data-i18n', 'view_achievements');
        }
        
        // About section
        document.querySelector('#about .section-title')?.setAttribute('data-i18n', 'about_title');
        const aboutText = document.querySelector('.about-text p');
        if (aboutText) {
            aboutText.setAttribute('data-i18n', 'about_text');
        }
        
        // About links
        const aboutLinks = document.querySelectorAll('.about-link span');
        if (aboutLinks.length > 0) {
            aboutLinks[0].setAttribute('data-i18n', 'web');
        }
        
        // Stats
        const statLabels = document.querySelectorAll('.stat-label');
        if (statLabels.length >= 3) {
            statLabels[0].setAttribute('data-i18n', 'vulnerabilities');
            statLabels[1].setAttribute('data-i18n', 'organizations');
            statLabels[2].setAttribute('data-i18n', 'years');
        }
        
        // Bounty section
        document.querySelector('#bounty .section-title')?.setAttribute('data-i18n', 'bounty_title');
        
        const tabButtons = document.querySelectorAll('.tab-btn');
        if (tabButtons.length >= 2) {
            tabButtons[0].setAttribute('data-i18n', 'companies');
            tabButtons[1].setAttribute('data-i18n', 'public_admin');
        }
        
        const tabDescriptions = document.querySelectorAll('.tab-description');
        if (tabDescriptions.length >= 2) {
            tabDescriptions[0].setAttribute('data-i18n', 'companies_description');
            tabDescriptions[1].setAttribute('data-i18n', 'public_description');
        }
        
        // Details buttons
        document.querySelectorAll('.public-item-overlay .btn').forEach(btn => {
            const text = btn.textContent.trim();
            if (text === 'Ver detalles') {
                btn.setAttribute('data-i18n', 'view_details');
            } else if (text === 'Confidencial') {
                btn.setAttribute('data-i18n', 'confidential');
            }
        });
        
        // Projects section
        document.querySelector('#projects .section-title')?.setAttribute('data-i18n', 'projects_title');
        
        const projectDescriptions = document.querySelectorAll('.project-description');
        if (projectDescriptions.length >= 3) {
            projectDescriptions[0].setAttribute('data-i18n', 'project1_description');
            projectDescriptions[1].setAttribute('data-i18n', 'project2_description');
            projectDescriptions[2].setAttribute('data-i18n', 'project3_description');
        }
        
        document.querySelectorAll('.project-overlay .btn').forEach(btn => {
            btn.setAttribute('data-i18n', 'visit_project');
        });
        
        // Contact section
        document.querySelector('#contact .section-title')?.setAttribute('data-i18n', 'contact_title');
        
        const contactText = document.querySelector('.contact-text p');
        if (contactText) {
            contactText.setAttribute('data-i18n', 'contact_text');
        }
        
        document.querySelectorAll('.contact-item a')[0]?.setAttribute('data-i18n', 'contact_email');
        
        // Form
        const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
        if (formInputs.length >= 4) {
            formInputs[0].setAttribute('placeholder', this.translations[this.currentLanguage].full_name);
            formInputs[0].setAttribute('data-i18n-placeholder', 'full_name');
            
            formInputs[1].setAttribute('placeholder', this.translations[this.currentLanguage].email);
            formInputs[1].setAttribute('data-i18n-placeholder', 'email');
            
            formInputs[2].setAttribute('placeholder', this.translations[this.currentLanguage].subject);
            formInputs[2].setAttribute('data-i18n-placeholder', 'subject');
            
            formInputs[3].setAttribute('placeholder', this.translations[this.currentLanguage].message);
            formInputs[3].setAttribute('data-i18n-placeholder', 'message');
        }
        
        const submitBtn = document.querySelector('.contact-form button[type="submit"]');
        if (submitBtn) {
            submitBtn.setAttribute('data-i18n', 'send_message');
        }
        
        // Footer
        const copyright = document.querySelector('.footer-bottom p');
        if (copyright) {
            copyright.setAttribute('data-i18n', 'copyright');
        }
    }
    
    /**
     * Set the language and update the page
     * @param {string} lang - Language code (en/es)
     */
    setLanguage(lang) {
        if (lang === this.currentLanguage) return;
        
        this.currentLanguage = lang;
        document.documentElement.lang = lang;
        
        // Update language button text
        const langText = document.querySelector('.language-text');
        if (langText) {
            langText.textContent = lang.toUpperCase();
        }
        
        // Store language preference
        localStorage.setItem('language', lang);
        
        // Dispatch language changed event
        const event = new CustomEvent('languageChanged');
        document.dispatchEvent(event);
    }
    
    /**
     * Translate all elements on the page
     */
    translatePage() {
        const currentTranslations = this.translations[this.currentLanguage];
        
        // Translate all elements with data-i18n attribute
        this.translatedElements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (currentTranslations[key]) {
                element.innerHTML = currentTranslations[key];
            }
        });
        
        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (currentTranslations[key]) {
                element.setAttribute('placeholder', currentTranslations[key]);
            }
        });
        
        // Update language toggle button aria-label
        const toggleButton = document.querySelector('.language-btn');
        if (toggleButton) {
            toggleButton.setAttribute('aria-label', currentTranslations.language);
        }
        
        // Update language options
        const options = document.querySelectorAll('.language-option');
        if (options.length >= 2) {
            options[0].textContent = currentTranslations.en;
            options[1].textContent = currentTranslations.es;
        }
    }
}

export default LanguageToggle;