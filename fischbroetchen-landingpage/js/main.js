/**
 * Fischbrötchen am Valentinstag – FRECH edition
 * Glowing blobs, floating hearts, scroll-triggered animations, sticky CTA
 */
(function () {
    'use strict';

    /* ---- CANVAS: hot pink blobs + hearts ---- */
    const canvas = document.getElementById('bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H;
    let blobs = [];
    let hearts = [];
    let raf;
    let visible = true;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    class Blob {
        constructor() {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.r = Math.random() * 200 + 120;
            this.dx = (Math.random() - 0.5) * 0.4;
            this.dy = (Math.random() - 0.5) * 0.4;
            const hues = [330, 340, 350, 345, 335];
            const hue = hues[Math.floor(Math.random() * hues.length)];
            this.color = `hsla(${hue}, 100%, ${55 + Math.random() * 20}%, ${0.06 + Math.random() * 0.06})`;
        }
        update() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < -this.r) this.x = W + this.r;
            if (this.x > W + this.r) this.x = -this.r;
            if (this.y < -this.r) this.y = H + this.r;
            if (this.y > H + this.r) this.y = -this.r;
        }
        draw() {
            const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
            g.addColorStop(0, this.color);
            g.addColorStop(1, 'transparent');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    class Heart {
        constructor(init) {
            this.reset(init);
        }
        reset(init) {
            this.x = Math.random() * W;
            this.y = init ? Math.random() * H : H + 30;
            this.s = Math.random() * 16 + 6;
            this.vy = -(Math.random() * 0.6 + 0.2);
            this.vx = (Math.random() - 0.5) * 0.25;
            this.a = Math.random() * 0.2 + 0.05;
            this.rot = Math.random() * Math.PI * 2;
            this.rv = (Math.random() - 0.5) * 0.015;
            this.w = Math.random() * Math.PI * 2;
        }
        update() {
            this.w += 0.015;
            this.x += this.vx + Math.sin(this.w) * 0.4;
            this.y += this.vy;
            this.rot += this.rv;
            if (this.y < -40) this.reset(false);
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rot);
            ctx.globalAlpha = this.a;
            ctx.fillStyle = `hsla(${340 + Math.random() * 20}, 100%, 60%, 1)`;
            ctx.beginPath();
            const s = this.s;
            ctx.moveTo(0, s * 0.3);
            ctx.bezierCurveTo(-s * 0.5, -s * 0.3, -s, s * 0.15, 0, s);
            ctx.bezierCurveTo(s, s * 0.15, s * 0.5, -s * 0.3, 0, s * 0.3);
            ctx.fill();
            ctx.restore();
        }
    }

    function initParticles() {
        blobs = [];
        hearts = [];
        for (let i = 0; i < 5; i++) blobs.push(new Blob());
        for (let i = 0; i < 18; i++) hearts.push(new Heart(true));
    }

    function loop() {
        if (!visible) { raf = requestAnimationFrame(loop); return; }
        ctx.clearRect(0, 0, W, H);
        blobs.forEach(b => { b.update(); b.draw(); });
        hearts.forEach(h => { h.update(); h.draw(); });
        raf = requestAnimationFrame(loop);
    }

    resize();
    initParticles();
    window.addEventListener('resize', () => { resize(); initParticles(); });
    document.addEventListener('visibilitychange', () => { visible = !document.hidden; });
    if (!reducedMotion) loop();

    /* ---- SCROLL: fade-in sections ---- */
    const fadeEls = document.querySelectorAll('.story, .drama, .quote, .vibes, .cta');
    fadeEls.forEach(el => el.classList.add('fade-in'));

    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.15 });
    fadeEls.forEach(el => io.observe(el));

    /* ---- STICKY BUY BUTTON ---- */
    const sticky = document.querySelector('.sticky-buy');
    if (sticky) {
        const heroEnd = document.querySelector('.hero');
        const stickyIO = new IntersectionObserver(([entry]) => {
            sticky.classList.toggle('visible', !entry.isIntersecting);
        }, { threshold: 0 });
        stickyIO.observe(heroEnd);
    }

    /* ---- DRAMA CARDS: stagger entrance ---- */
    const cards = document.querySelectorAll('.drama-card');
    const cardIO = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) {
                e.target.style.transitionDelay = `${i * 100}ms`;
                e.target.style.opacity = '1';
                e.target.style.transform = 'translateX(0)';
                cardIO.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    cards.forEach((c, i) => {
        c.style.opacity = '0';
        c.style.transform = i % 2 === 0 ? 'translateX(-30px)' : 'translateX(30px)';
        c.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardIO.observe(c);
    });

})();
