/* =============================================
   NAV — Smooth scroll to sections + mobile menu
   ============================================= */

   document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const navMenu = document.querySelector('.nav-links');
    const burger = document.querySelector('.nav-burger');
  
    // Smooth scroll on nav link click
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        // Skip for page links (not anchor-only)
        if (!href.startsWith('#')) {
          navMenu.classList.remove('open');
          return;
        }
        e.preventDefault();
        const targetId = href.substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close mobile menu
        navMenu.classList.remove('open');
      });
    });
  
    // Mobile burger toggle
    if (burger) {
      burger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });
    }
  });