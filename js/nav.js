/* =============================================
   NAV — état au scroll, section active, menu mobile
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const navMenu = document.querySelector('.nav-links');
  const burger = document.querySelector('.nav-burger');
  if (!nav || !navMenu) return;

  const navLinks = navMenu.querySelectorAll('a');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobileQuery = window.matchMedia('(max-width: 900px)');

  /* ── Barre givrée dès qu'on quitte le haut de page ── */
  const updateScrolled = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  updateScrolled();
  window.addEventListener('scroll', updateScrolled, { passive: true });

  /* ── Menu mobile ── */
  const isOpen = () => navMenu.classList.contains('open');

  const setMenu = (open) => {
    navMenu.classList.toggle('open', open);
    nav.classList.toggle('is-open', open);
    document.documentElement.classList.toggle('nav-open', open);
    if (burger) {
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    }
  };

  if (burger) {
    burger.addEventListener('click', () => {
      const open = !isOpen();
      setMenu(open);
      if (open) {
        const first = navMenu.querySelector('a');
        if (first) first.focus({ preventScroll: true });
      }
    });

    // Échap ferme le menu et rend le focus au bouton
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen()) {
        setMenu(false);
        burger.focus();
      }
    });

    // Clic en dehors ferme le menu
    document.addEventListener('click', (e) => {
      if (isOpen() && !e.target.closest('nav')) setMenu(false);
    });

    // Retour en desktop : on referme proprement
    mobileQuery.addEventListener('change', (e) => {
      if (!e.matches && isOpen()) setMenu(false);
    });
  }

  /* ── Clic sur un lien : scroll doux vers la section ── */
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href') || '';

      if (!href.startsWith('#')) {
        setMenu(false);
        return;
      }

      const target = document.getElementById(href.substring(1));
      if (!target) return;
      e.preventDefault();
      setMenu(false);
      target.scrollIntoView({
        behavior: reduceMotion.matches ? 'auto' : 'smooth',
        block: 'start'
      });
      history.replaceState(null, '', href);
    });
  });

  /* ── Section active (uniquement les ancres de la page) ── */
  const spyLinks = Array.from(navLinks).filter(a => {
    const href = a.getAttribute('href') || '';
    return href.startsWith('#') && href.length > 1 && !a.classList.contains('nav-cta');
  });
  const sections = spyLinks
    .map(a => document.getElementById(a.getAttribute('href').substring(1)))
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    const setActive = (id) => {
      spyLinks.forEach(a => {
        const active = a.getAttribute('href') === '#' + id;
        a.classList.toggle('is-active', active);
        if (active) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    };

    // Une section est "active" quand elle traverse la bande haute du viewport
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-35% 0px -60% 0px' });

    sections.forEach(s => spy.observe(s));

    // En haut de page (hero) ou dans le footer : aucun lien actif
    const clearIfOutside = () => {
      const first = sections[0].getBoundingClientRect().top;
      const last = sections[sections.length - 1].getBoundingClientRect().bottom;
      const band = window.innerHeight * 0.35;
      if (first > band || last < band) setActive(null);
    };
    window.addEventListener('scroll', clearIfOutside, { passive: true });
    clearIfOutside();
  }
});
