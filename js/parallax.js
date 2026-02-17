/* Parallax — Architectural background */
const hero = document.querySelector('.hero');
if (hero) {
  // Initialize CSS variables
  hero.style.setProperty('--grid-x', '0px');
  hero.style.setProperty('--grid-y', '0px');
  hero.style.setProperty('--arch1-x', '0px');
  hero.style.setProperty('--arch1-y', '0px');
  hero.style.setProperty('--arch2-x', '0px');
  hero.style.setProperty('--arch2-y', '0px');
  hero.style.setProperty('--arch3-x', '0px');
  hero.style.setProperty('--arch3-y', '0px');

  // Apply parallax on mouse move
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);

    // Apply very subtle parallax to grid (::before)
    const gridX = x * 15;
    const gridY = y * 15;

    // Apply parallax to different architectural shapes at different speeds
    const arch1X = x * -35;
    const arch1Y = y * -35;

    const arch2X = x * -50;
    const arch2Y = y * -50;

    const arch3X = x * -25;
    const arch3Y = y * -25;

    // Update CSS custom properties for parallax
    hero.style.setProperty('--grid-x', `${gridX}px`);
    hero.style.setProperty('--grid-y', `${gridY}px`);
    hero.style.setProperty('--arch1-x', `${arch1X}px`);
    hero.style.setProperty('--arch1-y', `${arch1Y}px`);
    hero.style.setProperty('--arch2-x', `${arch2X}px`);
    hero.style.setProperty('--arch2-y', `${arch2Y}px`);
    hero.style.setProperty('--arch3-x', `${arch3X}px`);
    hero.style.setProperty('--arch3-y', `${arch3Y}px`);
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