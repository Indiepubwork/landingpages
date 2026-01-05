/**
 * HADAL Landing Page - Ambient Effects
 * Nebula drift and particle system for atmospheric background
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        particleCount: 50,
        nebulaLayers: 3,
        colors: {
            primary: 'rgba(196, 149, 106, 0.15)',
            secondary: 'rgba(139, 154, 156, 0.1)',
            accent: 'rgba(212, 165, 116, 0.08)'
        },
        speedFactor: 0.3,
        driftSpeed: 0.0005
    };

    // Canvas setup
    const canvas = document.getElementById('nebula-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let nebulaPhase = 0;
    let animationId;

    // Resize handler
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
    }

    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * CONFIG.speedFactor;
            this.speedY = (Math.random() - 0.5) * CONFIG.speedFactor;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.fadeSpeed = Math.random() * 0.005 + 0.002;
            this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Fade in/out
            this.opacity += this.fadeSpeed * this.fadeDirection;
            if (this.opacity >= 0.6 || this.opacity <= 0.05) {
                this.fadeDirection *= -1;
            }

            // Wrap around edges
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(196, 149, 106, ${this.opacity})`;
            ctx.fill();
        }
    }

    // Initialize particles
    function initParticles() {
        particles = [];
        const count = Math.min(CONFIG.particleCount, Math.floor((width * height) / 20000));
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    // Draw nebula layers
    function drawNebula() {
        nebulaPhase += CONFIG.driftSpeed;

        for (let i = 0; i < CONFIG.nebulaLayers; i++) {
            const layerPhase = nebulaPhase + (i * 0.5);
            const x = width * 0.5 + Math.sin(layerPhase) * width * 0.3;
            const y = height * 0.5 + Math.cos(layerPhase * 0.7) * height * 0.2;
            const radius = Math.min(width, height) * (0.3 + i * 0.15);

            const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);

            if (i === 0) {
                gradient.addColorStop(0, CONFIG.colors.primary);
                gradient.addColorStop(1, 'transparent');
            } else if (i === 1) {
                gradient.addColorStop(0, CONFIG.colors.secondary);
                gradient.addColorStop(1, 'transparent');
            } else {
                gradient.addColorStop(0, CONFIG.colors.accent);
                gradient.addColorStop(1, 'transparent');
            }

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        }
    }

    // Animation loop
    function animate() {
        // Clear with fade effect for trails
        ctx.fillStyle = 'rgba(26, 18, 9, 0.1)';
        ctx.fillRect(0, 0, width, height);

        // Draw nebula
        drawNebula();

        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        animationId = requestAnimationFrame(animate);
    }

    // Check for reduced motion preference
    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    // Initialize
    function init() {
        if (prefersReducedMotion()) {
            canvas.style.display = 'none';
            return;
        }

        resize();
        window.addEventListener('resize', resize);

        // Initial clear
        ctx.fillStyle = 'rgba(26, 18, 9, 1)';
        ctx.fillRect(0, 0, width, height);

        animate();
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Cleanup on page hide (for performance)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else if (!prefersReducedMotion()) {
            animate();
        }
    });

})();
