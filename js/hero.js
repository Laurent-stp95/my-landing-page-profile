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

  // Compteur
  const counterCurrent = document.getElementById('rotatorCounter')?.querySelector('.counter-current');
  const pad = (n) => String(n + 1).padStart(2, '0');

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

      // Mise à jour compteur
      if (counterCurrent) {
        counterCurrent.style.opacity = '0';
        setTimeout(() => {
          counterCurrent.textContent = pad(current);
          counterCurrent.style.opacity = '1';
        }, 150);
      }

      // Clean up exit class after animation completes
      setTimeout(() => {
        words[prev].classList.remove('exit');
      }, 500);
    }, 400);
  };

  // Start rotation
  setInterval(rotateWord, 4000);
}
