/* =============================================
   PAGE TRANSITION — Wipe fluide index → cv.html
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('pageTransition');
  if (!overlay) return;

  const isEnterPage = overlay.classList.contains('page-transition--enter');

  /* ── Entrée sur cv.html ── */
  if (isEnterPage) {
    // N'animer que si on provient de index.html
    const fromIndex = new URLSearchParams(window.location.search).get('from') === 'index';

    if (!fromIndex) {
      // Accès direct à cv.html : pas d'animation, on masque l'overlay immédiatement
      overlay.style.display = 'none';
      return;
    }

    // Retrait du voile vers le haut
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.classList.add('is-done');
        overlay.addEventListener('transitionend', () => {
          overlay.style.display = 'none';
        }, { once: true });
      });
    });
    return;
  }

  /* ── Sur index.html : intercepter les clics vers cv.html ── */
  const cvLinks = document.querySelectorAll('a[href="cv.html"]');

  cvLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Activer le voile
      overlay.classList.add('is-active');
      overlay.style.pointerEvents = 'all';

      // Naviguer après la fin de l'animation (1.1s) avec le marqueur d'origine
      setTimeout(() => {
        window.location.href = 'cv.html?from=index';
      }, 1080);
    });
  });
});
