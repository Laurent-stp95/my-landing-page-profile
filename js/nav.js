/* =============================================
   NAV — Smooth scroll to sections + mobile menu
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const navMenu = document.querySelector('.nav-links');
  const burger = document.querySelector('.nav-burger');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const setMenu = (open) => {
    navMenu.classList.toggle('open', open);
    if (burger) burger.setAttribute('aria-expanded', String(open));
  };

  // Smooth scroll on nav link click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // Skip for page links (not anchor-only)
      if (!href.startsWith('#')) {
        setMenu(false);
        return;
      }

      e.preventDefault();
      const target = document.getElementById(href.substring(1));
      if (target) {
        target.scrollIntoView({
          behavior: reduceMotion.matches ? 'auto' : 'smooth',
          block: 'start'
        });
      }
      setMenu(false);
    });
  });

  if (burger) {
    burger.addEventListener('click', () => {
      setMenu(!navMenu.classList.contains('open'));
    });

    // Échap ferme le menu et rend le focus au bouton
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        setMenu(false);
        burger.focus();
      }
    });

    // Clic en dehors ferme le menu
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !e.target.closest('nav')) {
        setMenu(false);
      }
    });
  }
});
