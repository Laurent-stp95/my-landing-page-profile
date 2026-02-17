/* =============================================
   HERO ANIMATIONS — Ensure CSS animations trigger
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  // Force reflow to trigger CSS animations
  const hero = document.querySelector('.hero');
  if (hero) {
    // Trigger reflow
    void hero.offsetWidth;

    // Add a loaded class after DOM is ready
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);
  }

  // Debug: log animation states after 2 seconds
  setTimeout(() => {
    const greeting = document.querySelector('.hero-greeting');
    const titleWords = document.querySelectorAll('.title-word');
    const rotator = document.querySelector('.hero-rotator');
    const geo = document.querySelector('.hero-geo');

    console.log('🎬 Hero Animation States:');
    console.log('Greeting opacity:', greeting ? window.getComputedStyle(greeting).opacity : 'not found');
    console.log('Title words:', titleWords.length, 'found');
    titleWords.forEach((word, i) => {
      console.log(`  Word ${i} opacity:`, window.getComputedStyle(word).opacity);
      console.log(`  Word ${i} transform:`, window.getComputedStyle(word).transform);
    });
    console.log('Rotator opacity:', rotator ? window.getComputedStyle(rotator).opacity : 'not found');
    console.log('Geo opacity:', geo ? window.getComputedStyle(geo).opacity : 'not found');
  }, 2000);
});
