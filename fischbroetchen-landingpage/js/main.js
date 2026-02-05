/**
 * Fischbrötchen am Valentinstag – Floating Hearts & Rose Petals
 * Animated canvas background with hearts and soft petal particles.
 */
(function () {
    'use strict';

    const CONFIG = {
        heartCount: 25,
        petalCount: 30,
        colors: {
            hearts: [
                'rgba(232, 54, 109, 0.15)',
                'rgba(255, 107, 157, 0.12)',
                'rgba(255, 77, 125, 0.1)',
                'rgba(164, 19, 60, 0.1)',
                'rgba(255, 133, 161, 0.12)'
            ],
            petals: [
                'rgba(255, 182, 203, 0.2)',
                'rgba(255, 143, 171, 0.15)',
                'rgba(255, 214, 224, 0.2)',
                'rgba(255, 179, 198, 0.18)',
                'rgba(248, 200, 220, 0.15)'
            ]
        },
        speedFactor: 0.25
    };

    let canvas, ctx;
    let hearts = [];
    let petals = [];
    let animationId;
    let isVisible = true;

    class Heart {
        constructor() {
            this.reset(true);
        }

        reset(initial) {
            this.x = Math.random() * (canvas ? canvas.width : window.innerWidth);
            this.y = initial
                ? Math.random() * (canvas ? canvas.height : window.innerHeight)
                : (canvas ? canvas.height : window.innerHeight) + 20;
            this.size = Math.random() * 14 + 8;
            this.speedY = -(Math.random() * 0.4 + 0.15) * CONFIG.speedFactor;
            this.speedX = (Math.random() - 0.5) * 0.3 * CONFIG.speedFactor;
            this.opacity = Math.random() * 0.4 + 0.1;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.01;
            this.color = CONFIG.colors.hearts[Math.floor(Math.random() * CONFIG.colors.hearts.length)];
            this.wobble = Math.random() * Math.PI * 2;
            this.wobbleSpeed = Math.random() * 0.02 + 0.005;
        }

        update() {
            this.wobble += this.wobbleSpeed;
            this.x += this.speedX + Math.sin(this.wobble) * 0.3;
            this.y += this.speedY;
            this.rotation += this.rotationSpeed;

            if (this.y < -30) {
                this.reset(false);
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.beginPath();

            const s = this.size;
            ctx.moveTo(0, s * 0.3);
            ctx.bezierCurveTo(-s * 0.5, -s * 0.3, -s, s * 0.1, 0, s);
            ctx.bezierCurveTo(s, s * 0.1, s * 0.5, -s * 0.3, 0, s * 0.3);

            ctx.fill();
            ctx.restore();
        }
    }

    class Petal {
        constructor() {
            this.reset(true);
        }

        reset(initial) {
            this.x = Math.random() * (canvas ? canvas.width : window.innerWidth);
            this.y = initial
                ? Math.random() * (canvas ? canvas.height : window.innerHeight)
                : -10;
            this.size = Math.random() * 6 + 3;
            this.speedY = (Math.random() * 0.5 + 0.2) * CONFIG.speedFactor;
            this.speedX = (Math.random() - 0.5) * 0.4 * CONFIG.speedFactor;
            this.opacity = Math.random() * 0.3 + 0.1;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.02;
            this.color = CONFIG.colors.petals[Math.floor(Math.random() * CONFIG.colors.petals.length)];
            this.wobble = Math.random() * Math.PI * 2;
            this.wobbleSpeed = Math.random() * 0.03 + 0.01;
            this.scaleX = Math.random() * 0.5 + 0.5;
        }

        update() {
            this.wobble += this.wobbleSpeed;
            this.x += this.speedX + Math.sin(this.wobble) * 0.5;
            this.y += this.speedY;
            this.rotation += this.rotationSpeed;

            if (this.y > (canvas ? canvas.height : window.innerHeight) + 20) {
                this.reset(false);
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.scale(this.scaleX, 1);
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.ellipse(0, 0, this.size, this.size * 1.6, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function initParticles() {
        const scale = Math.min(window.innerWidth * window.innerHeight / (1920 * 1080), 1);
        const heartCount = Math.max(8, Math.floor(CONFIG.heartCount * scale));
        const petalCount = Math.max(12, Math.floor(CONFIG.petalCount * scale));

        hearts = [];
        petals = [];

        for (let i = 0; i < heartCount; i++) {
            hearts.push(new Heart());
        }
        for (let i = 0; i < petalCount; i++) {
            petals.push(new Petal());
        }
    }

    function animate() {
        if (!isVisible) {
            animationId = requestAnimationFrame(animate);
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        petals.forEach(p => {
            p.update();
            p.draw();
        });

        hearts.forEach(h => {
            h.update();
            h.draw();
        });

        animationId = requestAnimationFrame(animate);
    }

    function init() {
        canvas = document.getElementById('hearts-canvas');
        if (!canvas) return;

        ctx = canvas.getContext('2d');
        resizeCanvas();
        initParticles();

        window.addEventListener('resize', function () {
            resizeCanvas();
            initParticles();
        });

        document.addEventListener('visibilitychange', function () {
            isVisible = !document.hidden;
        });

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        animate();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
