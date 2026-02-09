// Interactive Background Effects Module
class InteractiveEffects {
    constructor() {
        this.cursorGlow = null;
        this.cursorTrail = null;
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.gradientBg = null;
    }

    init() {
        this.gradientBg = document.querySelector('.gradient-bg');
        this.createCursorElements();
        this.attachEventListeners();
        this.setupInteractiveElements();
    }

    createCursorElements() {
        // Create cursor glow element
        this.cursorGlow = document.createElement('div');
        this.cursorGlow.className = 'cursor-glow';
        document.body.appendChild(this.cursorGlow);

        // Create cursor trail element
        this.cursorTrail = document.createElement('div');
        this.cursorTrail.className = 'cursor-trail';
        document.body.appendChild(this.cursorTrail);
    }

    attachEventListeners() {
        // Enhanced mouse move effect
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));

        // Enhanced click ripple effect
        document.addEventListener('click', (e) => this.handleClick(e));

        // Enhanced touch effects for mobile
        document.addEventListener('touchstart', (e) => this.handleTouch(e));
    }

    handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        // Update cursor glow position
        this.cursorGlow.style.left = (this.mouseX - 200) + 'px';
        this.cursorGlow.style.top = (this.mouseY - 200) + 'px';

        // Update cursor trail with delay
        setTimeout(() => {
            this.cursorTrail.style.left = (this.mouseX - 75) + 'px';
            this.cursorTrail.style.top = (this.mouseY - 75) + 'px';
        }, 100);

        // Add mouse-active class to gradient background
        this.gradientBg.classList.add('mouse-active');

        // Create floating particles occasionally
        if (Math.random() < 0.1) {
            this.createParticle(this.mouseX, this.mouseY);
        }

        // Remove mouse-active class after a delay
        clearTimeout(this.gradientBg.mouseTimeout);
        this.gradientBg.mouseTimeout = setTimeout(() => {
            this.gradientBg.classList.remove('mouse-active');
        }, 500);
    }

    handleClick(e) {
        // Create multiple ripples for more impact
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                this.createRipple(e.clientX, e.clientY);
            }, i * 100);
        }

        // Create burst of particles
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                this.createParticle(e.clientX, e.clientY);
            }, i * 50);
        }
    }

    handleTouch(e) {
        const touch = e.touches[0];

        // Create ripples
        for (let i = 0; i < 2; i++) {
            setTimeout(() => {
                this.createRipple(touch.clientX, touch.clientY);
            }, i * 150);
        }

        // Create particles
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.createParticle(touch.clientX, touch.clientY);
            }, i * 100);
        }
    }

    createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = (x - 250) + 'px';
        ripple.style.top = (y - 250) + 'px';
        document.body.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 1200);
    }

    createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'cursor-particles';

        // Random offset for particle position
        const offsetX = (Math.random() - 0.5) * 100;
        const offsetY = (Math.random() - 0.5) * 100;

        particle.style.left = (x + offsetX) + 'px';
        particle.style.top = (y + offsetY) + 'px';

        document.body.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }

    setupInteractiveElements() {
        // Mouse enter/leave effects for interactive elements
        const interactiveElements = document.querySelectorAll('.social-icon, .cv-button, .nav-btn, .project-content, .research-card');

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                // Create particles around the element
                const rect = element.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                for (let i = 0; i < 3; i++) {
                    setTimeout(() => {
                        this.createParticle(centerX, centerY);
                    }, i * 200);
                }
            });
        });
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function () {
    const effects = new InteractiveEffects();
    effects.init();
});
