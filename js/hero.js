/* =============================================
   HERO GSAP — Draw-on SVG shapes + respiration
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Calculer les longueurs des paths pour stroke animation ---
  const paths = document.querySelectorAll('.arch-path');
  paths.forEach(path => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  });

  // --- 2. Rotations initiales (remplace le rotate() CSS) ---
  gsap.set('.arch-svg.arch-1', { rotation: 12, transformOrigin: 'center center' });
  gsap.set('.arch-svg.arch-3', { rotation: -8, transformOrigin: 'center center' });

  // --- 3. Timeline draw-on ---
  const tl = gsap.timeline();

  // Rendre les SVG visibles immédiatement (opacité gérée par la respiration ensuite)
  tl.to('.arch-svg', { opacity: 1, duration: 0.01 })
    // Draw-on en séquence décalée
    .to('.arch-svg.arch-1 .arch-path', {
      strokeDashoffset: 0,
      duration: 1.6,
      ease: 'power2.inOut'
    }, 0)
    .to('.arch-svg.arch-2 .arch-path', {
      strokeDashoffset: 0,
      duration: 1.4,
      ease: 'power2.inOut'
    }, 0.2)
    .to('.arch-svg.arch-3 .arch-path', {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: 'power2.inOut'
    }, 0.4);

  // --- 4. Boucle de respiration après tracé ---
  tl.call(() => {
    gsap.to('.arch-svg', {
      scale: 1.025,
      opacity: 0.7,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      stagger: 1.2
    });
  });

  // --- 5. Classe loaded pour compatibilité ---
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);

});
