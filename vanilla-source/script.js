/* =========================================
   PORTFOLIO INTERACTION LOGIC
   Bhattiprolu Venkateswararao (B.Tech CSE)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
  /* -----------------------------------------
     1. THEME SWITCHER (Dark & Light Mode)
     ----------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  // Retrieve saved theme preference or default to dark mode
  const currentTheme = localStorage.getItem('selected-theme') || 'dark';

  if (currentTheme === 'light') {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  } else {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }

  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    const isLight = body.classList.contains('light-theme');
    if (isLight) {
      themeIcon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('selected-theme', 'light');
    } else {
      themeIcon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('selected-theme', 'dark');
    }
  });

  /* -----------------------------------------
     2. MOBILE NAVIGATION MENU
     ----------------------------------------- */
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });

  /* -----------------------------------------
     3. SCROLL SPY (Active Link on Scroll)
     ----------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 80;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetLink.classList.add('active-link');
        } else {
          targetLink.classList.remove('active-link');
        }
      }
    });
  }

  window.addEventListener('scroll', scrollActive);

  /* -----------------------------------------
     4. SHOW SCROLL-TO-TOP BUTTON
     ----------------------------------------- */
  const scrollUp = document.getElementById('scroll-up');
  function handleScrollUp() {
    if (window.scrollY >= 350) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  }
  window.addEventListener('scroll', handleScrollUp);

  /* -----------------------------------------
     5. CONTACT FORM SUBMISSION HANDLER
     ----------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const feedbackDiv = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('user_name').value.trim();
      const email = document.getElementById('user_email').value.trim();
      const subject = document.getElementById('user_subject').value.trim();
      const message = document.getElementById('user_message').value.trim();

      if (!name || !email || !subject || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // UI state feedback
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';

        feedbackDiv.className = 'form-feedback success';
        feedbackDiv.innerHTML = `<strong>Thank you, ${name}!</strong> Your message has been received. I will review and get back to you shortly.`;
        contactForm.reset();

        setTimeout(() => {
          feedbackDiv.style.display = 'none';
        }, 6000);
      }, 700);
    });
  }
});
