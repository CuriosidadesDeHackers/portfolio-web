/**
 * Translations for the website
 * This file contains all translatable text organized by language and sections
 */

const translations = {
    en: {
        // Header
        'web_main': 'Main Website',
        'about_me': 'About Me',
        'bug_bounty': 'Bug Bounty',
        'projects': 'Projects',
        'contact': 'Contact',
        
        // Hero
        'hero_description': 'Cybersecurity, pentester and bug bounty hunter',
        'contact_btn': 'Contact',
        'view_achievements': 'View Achievements',
        
        // About
        'about_title': 'About Me',
        'about_text': 'I am passionate about cybersecurity with extensive experience in identifying vulnerabilities and participating in bug bounty programs. My goal is to help improve security in systems and applications, helping organizations protect their digital assets.',
        'web': 'Website',
        'vulnerabilities': 'Vulnerabilities<br>Reported',
        'organizations': 'Organizations<br>Helped',
        'years': 'Public<br>Recognitions',
        
        // Bug Bounty
        'bounty_title': 'Bug Bounty Achievements',
        'companies': 'Companies',
        'public_admin': 'Public Administrations',
        'companies_description': 'Companies where I have found and reported vulnerabilities to improve their security:',
        'public_description': 'Public administrations and organizations I have helped improve their security:',
        'view_details': 'View details',
        'confidential': 'Confidential',
        
        // Projects
        'projects_title': 'My Projects',
        'project1_description': 'Platform of CTFs and cybersecurity challenges where you can explore the fascinating world of security through vulnerable laboratories and realistic scenarios.',
        'project2_description': 'Portal of articles, summaries, projects and new technologies in the field of cybersecurity, with the aim of sharing knowledge for free.',
        'project3_description': 'Platform of vulnerable laboratories to practice web hacking and prepare to improve your bug bounty skills.',
        'visit_project': 'Visit project',
        
        // Contact
        'contact_title': 'Contact',
        'contact_text': 'Interested in improving your organization\'s security? Need a security audit or have a query? I am available for collaborations and professional services.',
        'contact_email': 'Contact email',
        'full_name': 'Full name',
        'email': 'Email',
        'subject': 'Subject',
        'message': 'Message',
        'send_message': 'No available',
        
        // Footer
        'copyright': '© CuriosidadesDeHackers 2023-2025. All rights reserved.',
        
        // Language
        'language': 'Language',
        'en': 'English',
        'es': 'Spanish',

        // Articles section
        'articles_title': 'Latest Articles',
        'read_article': 'Read article',
        'article1_desc': 'Subdomain takeovers occur when a subdomain points to an external service (such as GitHub Pages, AWS S3, Heroku, etc.)',
        'article2_desc': 'Web Cache Deception is a technique in which an attacker tricks a web cache server into storing and serving content that should not be in the cache.',
        'article3_desc': 'Web cache poisoning is an advanced technique by which an attacker exploits the behavior of a web server and its cache so that a malicious HTTP response is delivered to other users.',
        'article4_desc': '2FA (Two-Factor Authentication) is a security method that requires two different steps to verify a users identity. Instead of relying solely on a password, 2FA adds a second layer of security.',
        'article5_desc': 'A downgrade attack, also called a TLS downgrade attack, is a cryptographic technique that exploits the backward compatibility of systems or protocols, such as the SSL/TLS protocol, to force a secure connection to use older or less secure encryption algorithms or cipher suites.',
        'article6_desc': 'API (Application Programming Interface) abuse is a growing concern for businesses and organizations that rely on APIs to provide access to their services and data.',

        // Tools section
        'tools_title': 'Latest Tools Developed',
        'view_on_github': 'View on GitHub',
        'tool1_desc': 'Advanced CSRF PoC Generator is a professional extension for Burp Suite designed to automate the creation of Proofs of Concept (PoC).',
        'tool2_desc': 'This project is a web tool designed to generate Proofs of Concept (PoC) for CSRF (Cross-Site Request Forgery) attacks from a complete HTTP request.',
        'tool3_desc': 'This project consists of a Telegram bot that allows users to add Indicators of Compromise (IOCs) to an AsciiDoc file (peticiones.adoc).',
        'tool4_desc': 'An interactive tool that allows selecting XSS payloads by event (onClick, onError, etc.) and tag (img, script, etc.) for security testing.',
        'tool5_desc': 'Subdomain Takeover Scanner is a command-line tool written in Python designed to identify and verify potential subdomain takeover vulnerabilities in a specific domain.',
        'tool6_desc': 'HotfixInstaller is a PowerShell script designed to automate the installation of hotfix files (.msu) located in a specific directory. It provides a visual progress bar, error handling, and detailed activity logging.'

    },
    es: {
        // Header
        'web_main': 'Web Principal',
        'about_me': 'Sobre Mí',
        'bug_bounty': 'Bug Bounty',
        'projects': 'Proyectos',
        'contact': 'Contacto',
        
        // Hero
        'hero_description': 'Experto en ciberseguridad, pentesting y bug bounty hunter',
        'contact_btn': 'Contactar',
        'view_achievements': 'Ver Logros',
        
        // About
        'about_title': 'Sobre Mí',
        'about_text': 'Soy un apasionado en ciberseguridad con amplia experiencia en identificación de vulnerabilidades y participación en programas de bug bounty. Mi objetivo es contribuir a mejorar la seguridad en sistemas y aplicaciones, ayudando a organizaciones a proteger sus activos digitales.',
        'web': 'Web',
        'vulnerabilities': 'Vulnerabilidades<br>Reportadas',
        'organizations': 'Organizaciones<br>Ayudadas',
        'years': 'Reconocimientos<br>Publicos',
        
        // Bug Bounty
        'bounty_title': 'Logros en Bug Bounty',
        'companies': 'Empresas',
        'public_admin': 'Administraciones Públicas',
        'companies_description': 'Empresas en las que he encontrado y reportado vulnerabilidades para mejorar su seguridad:',
        'public_description': 'Administraciones y organizaciones públicas a las que he ayudado a mejorar su seguridad:',
        'view_details': 'Ver detalles',
        'confidential': 'Confidencial',
        
        // Projects
        'projects_title': 'Mis Proyectos',
        'project1_description': 'Plataforma de CTFs y retos de ciberseguridad donde se explora el fascinante mundo de la seguridad a través de laboratorios vulnerables y escenarios realistas.',
        'project2_description': 'Portal de artículos, resúmenes, proyectos y nuevas tecnologías en el ámbito de la ciberseguridad, con el objetivo de compartir conocimiento de forma gratuita.',
        'project3_description': 'Plataforma de laboratorios vulnerables para practicar hacking web y prepararte para mejorar tus habilidades en bug bounty.',
        'visit_project': 'Visitar proyecto',
        
        // Contact
        'contact_title': 'Contacto',
        'contact_text': '¿Interesado en mejorar la seguridad de tu organización? ¿Necesitas una auditoría de seguridad o tienes alguna consulta? Estoy disponible para colaboraciones y servicios profesionales.',
        'contact_email': 'Email de contacto',
        'full_name': 'Nombre completo',
        'email': 'Correo electrónico',
        'subject': 'Asunto',
        'message': 'Mensaje',
        'send_message': 'No disponible',
        
        // Footer
        'copyright': '© CuriosidadesDeHackers 2023-2025. Todos los derechos reservados.',
        
        // Language
        'language': 'Idioma',
        'en': 'Inglés',
        'es': 'Español',

        // Sección de artículos
        'articles_title': 'Últimos Artículos',
        'read_article': 'Leer artículo',
        'article1_desc': 'Los subdomain takeover ocurren cuando un subdominio apunta a un servicio externo (como GitHub Pages, AWS S3, Heroku, etc.)',
        'article2_desc': 'La Web Cache Deception es una técnica en la que un atacante engaña a un servidor de caché web para que almacene y sirva contenido que no debería estar en la caché.',
        'article3_desc': 'El envenenamiento de caché web es una técnica avanzada mediante la cual un atacante explota el comportamiento de un servidor web y su caché para que una respuesta HTTP dañina sea entregada a otros usuarios.',
        'article4_desc': '2FA (Two-Factor Authentication) es un método de seguridad que requiere dos pasos diferentes para verificar la identidad de un usuario. En lugar de depender únicamente de una contraseña, el 2FA agrega una segunda capa de seguridad.',
        'article5_desc': 'Un ataque de downgrade, también denominado de ataque degradación de TLS, es una técnica criptográfica que explota la compatibilidad retroactiva de sistemas o protocolos, como el protocolo SSL/TLS, para forzar una conexión segura a utilizar algoritmos de cifrad o suites de cifrado más antiguos o menos seguros.',
        'article6_desc': 'El abuso de las API (interfaz de programación de aplicaciones) es una preocupación cada vez mayor para las empresas y organizaciones que dependen de las API para proporcionar acceso a sus servicios y datos. ',

        // Sección de herramientas
        'tools_title': 'Últimas Herramientas Desarrolladas',
        'view_on_github': 'Ver en GitHub',
        'tool1_desc': 'CSRF PoC Generator Avanzado es una extensión profesional para Burp Suite diseñada para automatizar la creación de Proofs of Concept (PoC).',
        'tool2_desc': 'Este proyecto es una herramienta web diseñada para generar pruebas de concepto (PoC) de ataques CSRF (Cross-Site Request Forgery) a partir de una petición HTTP completa.',
        'tool3_desc': 'Este proyecto consiste en un bot de Telegram que permite a los usuarios agregar Indicadores de Compromiso (IOCs) a un archivo AsciiDoc (peticiones.adoc).',
        'tool4_desc': 'Una herramienta interactiva que permite seleccionar payloads XSS por evento (onClick, onError, etc.) y etiqueta (img, script, etc.) para pruebas de seguridad.',
        'tool5_desc': 'Subdomain Takeover Scanner es una herramienta de línea de comandos escrita en Python diseñada para identificar y verificar posibles vulnerabilidades de subdomain takeover en un dominio específico.',
        'tool6_desc': 'HotfixInstaller es un script de PowerShell diseñado para automatizar la instalación de archivos de hotfix (.msu) ubicados en un directorio específico. Proporciona una barra de progreso visual, manejo de errores y registro detallado de la actividad.'
    }
};

// Export translations for use in other modules
export default translations;