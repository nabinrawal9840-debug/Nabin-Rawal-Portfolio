
  // ========== 1. Mobile Navigation Toggle ==========
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    // Close menu when clicking a link (mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }

  // ========== 2. Fade-Up Animation on Scroll ==========
  // Add initial fade-up class to target elements
  const fadeTargets = document.querySelectorAll(
    '.about-card, .skills-grid .skill-card, .projects-grid .project-card, .contact-info-card, .contact-form-card, .hero-content'
  );

  fadeTargets.forEach(el => el.classList.add('fade-up'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing after animation (remove to repeat on scroll)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  fadeTargets.forEach(el => observer.observe(el));

  // ========== 3. Smooth Scroll for Anchor Links (optional enhancement) ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for fixed navbar
          behavior: 'smooth'
        });
      }
    });
  });
