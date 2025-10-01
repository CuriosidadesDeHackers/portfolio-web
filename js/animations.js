document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    
    if (cursor && window.innerWidth > 1024) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        const speed = 0.15;

        document.addEventListener('mousemove', e => {
            mouseX = e.pageX;
            mouseY = e.pageY;
        });

        function animateCursor() {
            const distX = mouseX - cursorX;
            const distY = mouseY - cursorY;

            cursorX += distX * speed;
            cursorY += distY * speed;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';

            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        document.addEventListener('click', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
            setTimeout(() => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 200);
        });

        const clickables = document.querySelectorAll('a, button, .logo-item, .project-card, .public-item, input, textarea, .stat-item, .social-btn');

        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '50px';
                cursor.style.height = '50px';
                cursor.style.borderColor = '#33b1e8';
                cursor.style.borderWidth = '3px';
            });

            el.addEventListener('mouseleave', () => {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.borderColor = '#009ee1';
                cursor.style.borderWidth = '2px';
            });
        });
    }
    
    // Matrix effect
    function createMatrixEffect() {
        const matrixBg = document.getElementById('matrix-bg');

        if (!matrixBg) return;

        const width = matrixBg.offsetWidth;
        const height = matrixBg.offsetHeight;
        const charCount = Math.floor(width / 25);
        const maxChars = charCount * 3;

        const charSet = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

        function createMatrixChar() {
            if (matrixBg.children.length >= maxChars) return;

            const char = document.createElement('span');
            char.classList.add('matrix-bg-char');
            char.textContent = charSet.charAt(Math.floor(Math.random() * charSet.length));
            char.style.left = `${Math.random() * 100}%`;
            char.style.animationDuration = `${Math.random() * 4 + 6}s`;
            char.style.opacity = Math.random() * 0.4 + 0.2;
            char.style.fontSize = `${Math.random() * 6 + 8}px`;

            matrixBg.appendChild(char);

            setTimeout(() => {
                char.remove();
            }, 12000);
        }

        for (let i = 0; i < charCount; i++) {
            setTimeout(createMatrixChar, Math.random() * 3000);
        }

        setInterval(() => {
            if (matrixBg.children.length < maxChars) {
                createMatrixChar();
            }
        }, 400);
    }
    
    // Initialize matrix effect with a short delay
    setTimeout(createMatrixEffect, 1000);
    
    // Glitch effect enhancement
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(el => {
        // Set the data-text attribute to match the element's text content
        el.setAttribute('data-text', el.textContent);
        
        // Random glitch activation
        setInterval(() => {
            if (Math.random() > 0.8) {
                el.classList.add('active-glitch');
                setTimeout(() => {
                    el.classList.remove('active-glitch');
                }, 500 + Math.random() * 1000);
            }
        }, 2000);
    });
    
    // Scroll-triggered animations for sections
    function revealOnScroll() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.85) {
                section.classList.add('fade-in');
                
                // Add staggered animations to section children
                const elements = section.querySelectorAll('.logo-item, .public-item, .project-card');
                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('scale-in');
                    }, 100 * index);
                });
            }
        });
    }
    
    // Initial check and add scroll event
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
    
    function createParticles() {
        const heroSection = document.querySelector('.hero-section');

        if (!heroSection) return;

        const particleCount = 40;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('span');
            particle.classList.add('particle');

            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.backgroundColor = `rgba(0, 158, 225, ${Math.random() * 0.6 + 0.3})`;
            particle.style.opacity = Math.random() * 0.7 + 0.3;
            particle.style.position = 'absolute';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.filter = 'blur(1px)';

            const keyframes = `
                @keyframes float-${i} {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                        opacity: ${Math.random() * 0.5 + 0.3};
                    }
                    25% {
                        transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.2);
                        opacity: ${Math.random() * 0.7 + 0.5};
                    }
                    50% {
                        transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) scale(0.9);
                        opacity: ${Math.random() * 0.4 + 0.2};
                    }
                    75% {
                        transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.1);
                        opacity: ${Math.random() * 0.6 + 0.4};
                    }
                }
            `;

            const style = document.createElement('style');
            style.textContent = keyframes;
            document.head.appendChild(style);

            particle.style.animation = `float-${i} ${Math.random() * 15 + 8}s infinite cubic-bezier(0.25, 0.8, 0.25, 1)`;

            heroSection.appendChild(particle);
        }
    }
    
    // Initialize particles with a delay
    setTimeout(createParticles, 1000);
    
    const logoItems = document.querySelectorAll('.logo-item');

    logoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 12px 30px rgba(0, 158, 225, 0.35)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });

    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;

        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });

        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    const statItems = document.querySelectorAll('.stat-item');

    statItems.forEach((stat, index) => {
        stat.style.animationDelay = `${index * 0.15}s`;
    });
});