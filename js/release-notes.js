/* =============================================
   NOTES DE VERSION — le rail suit la version visible
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  const links = Array.from(document.querySelectorAll('.rn-rail a'));
  const releases = links
    .map(a => document.getElementById(a.getAttribute('href').slice(1)))
    .filter(Boolean);
  if (!releases.length || !('IntersectionObserver' in window)) return;

  const setActive = (id) => {
    links.forEach(a => {
      const on = a.getAttribute('href') === '#' + id;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  };

  // Une version est active quand elle traverse le haut du viewport
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  releases.forEach(r => spy.observe(r));
  setActive(releases[0].id);

  // Clic sur une version repliée : on l'ouvre en arrivant dessus
  links.forEach(a => {
    a.addEventListener('click', () => {
      const target = document.getElementById(a.getAttribute('href').slice(1));
      const details = target && target.querySelector('details');
      if (details) details.open = true;
      setActive(target.id);
    });
  });
});
