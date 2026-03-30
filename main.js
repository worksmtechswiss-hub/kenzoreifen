/* ============================================
   KENZO Reifen — main.js
   GSAP + ScrollTrigger Animations
   Bold & Energisch — Dynamic Scroll Effects
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // Wait for GSAP to load
  const initGSAP = () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      setTimeout(initGSAP, 100);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // --- Hero Entrance Animation ---
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTimeline
      .fromTo('.hero-badge',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo('.hero-text h1',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.3'
      )
      .fromTo('.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo('.hero-actions',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo('.hero-showcase',
        { opacity: 0, scale: 0.85, x: 50 },
        { opacity: 1, scale: 1, x: 0, duration: 1, ease: 'back.out(1.2)' },
        '-=0.6'
      )
      .fromTo('.float-card',
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.15, ease: 'back.out(1.4)' },
        '-=0.5'
      )
      .fromTo('.showcase-stat',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.2)' },
        '-=0.3'
      );

    // --- Hero Parallax Shapes ---
    gsap.to('.hero-shape-1', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: -80,
      rotation: 180,
    });

    gsap.to('.hero-shape-2', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
      y: -60,
      x: 40,
    });

    gsap.to('.hero-shape-3', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
      },
      y: -100,
      rotation: 270,
    });

    // --- Fade Up Animations ---
    gsap.utils.toArray('.gsap-fade-up').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 60%',
            toggleActions: 'play none none none',
          },
          delay: (el.closest('.services-grid, .benefits-grid, .pricing-grid, .steps-grid, .trust-bar'))
            ? (i % 4) * 0.12
            : 0,
        }
      );
    });

    // --- Fade Left Animations ---
    gsap.utils.toArray('.gsap-fade-left').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // --- Fade Right Animations ---
    gsap.utils.toArray('.gsap-fade-right').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // --- Scale Up Animations (Pricing) ---
    gsap.utils.toArray('.gsap-scale-up').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.85, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.15,
        }
      );
    });

    // --- Staggered Section Headers ---
    gsap.utils.toArray('.section-header').forEach((header) => {
      const tag = header.querySelector('.section-tag');
      const h2 = header.querySelector('h2');
      const desc = header.querySelector('.section-desc');
      const divider = header.querySelector('.section-divider');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: header,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });

      if (tag) tl.fromTo(tag, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
      if (h2) tl.fromTo(h2, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3');
      if (divider) tl.fromTo(divider, { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, '-=0.3');
      if (desc) tl.fromTo(desc, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2');
    });

    // --- Steps Connection Line Animation ---
    const stepsLine = document.querySelector('.steps-grid::before');
    if (document.querySelector('.steps-grid')) {
      gsap.fromTo('.steps-grid',
        {},
        {
          scrollTrigger: {
            trigger: '.steps-grid',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // --- Service Cards Stagger ---
    const serviceCards = gsap.utils.toArray('.service-card');
    if (serviceCards.length) {
      ScrollTrigger.create({
        trigger: '.services-grid',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(serviceCards,
            { opacity: 0, y: 50, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.12,
              ease: 'power2.out',
            }
          );
        },
        once: true,
      });
    }

    // --- Region Cards Alternating Slide ---
    const regionCards = gsap.utils.toArray('.region-card');
    if (regionCards.length) {
      regionCards.forEach((card, i) => {
        const fromX = i % 2 === 0 ? -40 : 40;
        gsap.fromTo(card,
          { opacity: 0, x: fromX },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
            delay: (i % 4) * 0.08,
          }
        );
      });
    }

    // --- Pricing Card Hover Glow ---
    const priceCards = document.querySelectorAll('.price-card');
    priceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          boxShadow: '0 12px 50px rgba(100, 46, 142, 0.3)',
          duration: 0.3,
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          boxShadow: card.classList.contains('featured')
            ? '0 8px 40px rgba(100, 46, 142, 0.25)'
            : '0 0 0 rgba(0,0,0,0)',
          duration: 0.3,
        });
      });
    });

  };

  initGSAP();

  // --- Header Scroll Effect ---
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // --- Mobile Menu Toggle ---
  const menuToggle = document.querySelector('.menu-toggle');
  const navMain = document.querySelector('.nav-main');
  if (menuToggle && navMain) {
    menuToggle.addEventListener('click', () => {
      navMain.classList.toggle('open');
      const isOpen = navMain.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navMain.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMain.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (question && answer) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all
        faqItems.forEach(other => {
          other.classList.remove('open');
          const otherQ = other.querySelector('.faq-question');
          const otherA = other.querySelector('.faq-answer');
          if (otherQ) otherQ.setAttribute('aria-expanded', 'false');
          if (otherA) otherA.style.maxHeight = '0';
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
          question.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  // --- Counter Animation ---
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          let current = 0;
          const step = Math.max(1, Math.floor(target / 50));
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            el.textContent = current.toLocaleString('de-CH') + suffix;
          }, 25);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  // --- Phone link tracking ---
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'phone_click', {
          event_category: 'Contact',
          event_label: link.href,
        });
      }
    });
  });

  // --- Legacy animation fallback (for subpages without GSAP) ---
  const animatedEls = document.querySelectorAll('.animate-on-scroll');
  if (animatedEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animatedEls.forEach(el => observer.observe(el));
  }

});
