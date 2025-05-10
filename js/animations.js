document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    
    if (cursor && window.innerWidth > 1024) {
        document.addEventListener('mousemove', e => {
            cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
        });
        
        document.addEventListener('click', () => {
            cursor.classList.add('cursor-click');
            setTimeout(() => {
                cursor.classList.remove('cursor-click');
            }, 500);
        });
        
        // Change cursor style on hover of clickable elements
        const clickables = document.querySelectorAll('a, button, .logo-item, .project-card, .public-item, input, textarea');
        
        clickables.forEach(el => {
            el.addEventListener('mouseover', () => {
                cursor.classList.add('cursor-hover');
            });
            
            el.addEventListener('mouseout', () => {
                cursor.classList.remove('cursor-hover');
            });
        });
    }
    
    // Matrix effect
    function createMatrixEffect() {
        const matrixBg = document.getElementById('matrix-bg');
        
        if (!matrixBg) return;
        
        const width = matrixBg.offsetWidth;
        const height = matrixBg.offsetHeight;
        const charCount = Math.floor(width / 20); // Approximately 1 character per 20px width
        
        const charSet = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        
        function createMatrixChar() {
            const char = document.createElement('span');
            char.classList.add('matrix-bg-char');
            char.textContent = charSet.charAt(Math.floor(Math.random() * charSet.length));
            char.style.left = `${Math.random() * width}px`;
            char.style.animationDuration = `${Math.random() * 5 + 5}s`;
            char.style.opacity = Math.random() * 0.5 + 0.1;
            
            matrixBg.appendChild(char);
            
            setTimeout(() => {
                char.remove();
            }, 10000);
        }
        
        // Initially create some characters
        for (let i = 0; i < charCount; i++) {
            setTimeout(createMatrixChar, Math.random() * 2000);
        }
        
        // Continue creating characters periodically
        setInterval(() => {
            if (matrixBg.children.length < charCount * 2) {
                createMatrixChar();
            }
        }, 300);
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
    
    // Particle effect for hero section (simplified version)
    function createParticles() {
        const heroSection = document.querySelector('.hero-section');
        
        if (!heroSection) return;
        
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('span');
            particle.classList.add('particle');
            
            // Random properties
            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.backgroundColor = `rgba(0, 158, 225, ${Math.random() * 0.5 + 0.3})`;
            particle.style.opacity = Math.random() * 0.8 + 0.2;
            
            // Animation properties
            particle.style.position = 'absolute';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            
            // Animation with keyframes created dynamically
            const keyframes = `
                @keyframes float-${i} {
                    0% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px);
                    }
                    100% {
                        transform: translate(0, 0);
                    }
                }
            `;
            
            const style = document.createElement('style');
            style.textContent = keyframes;
            document.head.appendChild(style);
            
            particle.style.animation = `float-${i} ${Math.random() * 10 + 5}s infinite ease-in-out`;
            
            heroSection.appendChild(particle);
        }
    }
    
    // Initialize particles with a delay
    setTimeout(createParticles, 1000);
    
    // Logo hover effect enhancement
    const logoItems = document.querySelectorAll('.logo-item');
    
    logoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Add pulsing glow effect
            item.style.boxShadow = `0 0 15px rgba(0, 158, 225, 0.7)`;
            item.style.transform = `translateY(-5px) scale(1.05)`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.boxShadow = ``;
            item.style.transform = ``;
        });
    });
});