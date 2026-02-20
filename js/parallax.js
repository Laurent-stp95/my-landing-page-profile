/* Parallax — Architectural background */
const hero = document.querySelector('.hero');
if (hero) {
  // Initialize CSS variables
  hero.style.setProperty('--grid-x', '0px');
  hero.style.setProperty('--grid-y', '0px');

  // Apply parallax on mouse move
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);

    // Grid background (CSS custom property, inchangé)
    hero.style.setProperty('--grid-x', `${x * 15}px`);
    hero.style.setProperty('--grid-y', `${y * 15}px`);

    // SVG shapes via gsap.set (compatible avec la timeline GSAP)
    gsap.set('.arch-svg.arch-1', { x: x * -35, y: y * -35 });
    gsap.set('.arch-svg.arch-2', { x: x * -50, y: y * -50 });
    gsap.set('.arch-svg.arch-3', { x: x * -25, y: y * -25 });
  });
}

/* Word Rotator — Letter-by-letter animation */
const words = document.querySelectorAll('.rotator-word');

// Wrap each letter in a span for individual animation
words.forEach(word => {
  const text = word.textContent;
  word.innerHTML = '';
  text.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
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

  // Start rotation
  setInterval(rotateWord, 4000);
}