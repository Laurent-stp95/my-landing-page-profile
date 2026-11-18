/* =============================================
   HERO — Word rotator (letter-by-letter)
   ============================================= */

/* Word Rotator — Letter-by-letter animation */
const words = document.querySelectorAll('.rotator-word');

// Wrap each letter in a span for individual animation
words.forEach(word => {
  const text = word.textContent;
  word.innerHTML = '';
  text.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? ' ' : char;
    word.appendChild(span);
  });
});

if (words.length > 1) {
  let current = 0;

  const setLetterDelays = (word, delayPerLetter) => {
    const letters = word.querySelectorAll('span');
    letters.forEach((letter, index) => {
      letter.style.transitionDelay = `${index * delayPerLetter}ms`;
    });
  };

  const rotateWord = () => {
    // Exit current word
    const prev = current;
    setLetterDelays(words[prev], 20); // Fast exit
    words[prev].classList.remove('active');
    words[prev].classList.add('exit');

    // Wait for exit animation before entering next
    setTimeout(() => {
      current = (current + 1) % words.length;

      // Set delays BEFORE adding active class
      setLetterDelays(words[current], 50); // 50ms between each letter

      // Force reflow to ensure delays are applied before transition starts
      void words[current].offsetWidth;

      words[current].classList.remove('exit');
      words[current].classList.add('active');

      // Clean up exit class after animation completes
      setTimeout(() => {
        words[prev].classList.remove('exit');
      }, 500);
    }, 400);
  };

  // Start rotation (immobile si mouvement réduit : le 1er mot reste affiché)
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Le mot ne tourne que si le hero est visible et l'onglet actif
    const hero = document.querySelector('.hero');
    let heroVisible = true;
    if (hero && 'IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        heroVisible = entries[0].isIntersecting;
      }).observe(hero);
    }
    setInterval(() => {
      if (heroVisible && !document.hidden) rotateWord();
    }, 4000);
  }
}
