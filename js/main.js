/* ============================================================
   SADAS — main.js
   Shared across all pages: navbar, mobile menu, scroll reveal,
   hero canvas animation (home page only).
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. NAVBAR — scroll-triggered frosted glass
     ---------------------------------------------------------- */
  const navbar = document.querySelector('.navbar');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Non-home pages always show the solid/frosted bar
  if (navbar && navbar.dataset.alwaysScrolled === 'true') {
    navbar.classList.add('scrolled');
  } else {
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll(); // Run once on load
  }

  /* ----------------------------------------------------------
     2. ACTIVE NAV LINK — highlight current page
     ---------------------------------------------------------- */
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentFile) {
      link.classList.add('active');
    }
  });

  /* ----------------------------------------------------------
     3. MOBILE NAV — hamburger toggle
     ---------------------------------------------------------- */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  const mobileClose = document.querySelector('.nav-mobile-close');

  function openMobileNav() {
    if (!mobileNav || !hamburger) return;
    hamburger.classList.add('open');
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!mobileNav || !hamburger) return;
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (mobileNav.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileNav);
  }

  // Close when a mobile link is clicked
  document.querySelectorAll('.nav-mobile a').forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMobileNav();
  });

  /* ----------------------------------------------------------
     4. SCROLL REVEAL — IntersectionObserver
     ---------------------------------------------------------- */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ----------------------------------------------------------
     5. HERO CANVAS — floating gold particle network
        (Only runs when #hero-canvas exists on the page)
     ---------------------------------------------------------- */
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const GOLD_R = 201, GOLD_G = 168, GOLD_B = 76;
  const PARTICLE_COUNT = 55;
  const CONNECT_DIST  = 130;
  const MOUSE_DIST    = 160;

  let W, H, particles, mouse;

  mouse = { x: null, y: null };

  /* Resize handler */
  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  window.addEventListener('resize', resize, { passive: true });

  /* Mouse tracking for interactive effect */
  canvas.addEventListener('mousemove', function (e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', function () {
    mouse.x = null;
    mouse.y = null;
  });

  /* Particle class */
  function Particle() {
    this.reset = function () {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.25;
      this.vy = (Math.random() - 0.5) * 0.25;
      this.r  = Math.random() * 1.2 + 0.5;
      this.alpha = Math.random() * 0.35 + 0.1;
    };

    this.update = function () {
      this.x += this.vx;
      this.y += this.vy;

      // Wrap edges
      if (this.x < -5) this.x = W + 5;
      if (this.x > W + 5) this.x = -5;
      if (this.y < -5) this.y = H + 5;
      if (this.y > H + 5) this.y = -5;

      // Subtle mouse attraction
      if (mouse.x !== null) {
        var dx = mouse.x - this.x;
        var dy = mouse.y - this.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST) {
          var force = (MOUSE_DIST - dist) / MOUSE_DIST * 0.012;
          this.vx += dx * force / dist;
          this.vy += dy * force / dist;
        }
      }

      // Speed cap
      var speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed > 0.6) {
        this.vx = (this.vx / speed) * 0.6;
        this.vy = (this.vy / speed) * 0.6;
      }
    };

    this.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + GOLD_R + ',' + GOLD_G + ',' + GOLD_B + ',' + this.alpha + ')';
      ctx.fill();
    };

    this.reset();
  }

  /* Draw connecting lines between nearby particles */
  function drawConnections() {
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx   = particles[i].x - particles[j].x;
        var dy   = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECT_DIST) {
          var alpha = (1 - dist / CONNECT_DIST) * 0.07;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(' + GOLD_R + ',' + GOLD_G + ',' + GOLD_B + ',' + alpha + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  /* Animation loop */
  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(function (p) { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }

  /* Initialise */
  function init() {
    resize();
    particles = [];
    for (var i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
    animate();
  }

  init();

})();
