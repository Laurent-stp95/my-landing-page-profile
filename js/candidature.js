/* =============================================
   CANDIDATURE — Protection + Animations
   ============================================= */

(function () {
  'use strict';

  /* ── Configuration ── */
  const MAX_ATTEMPTS  = 3;
  const LOCK_DURATION = 5 * 60 * 1000; // 5 minutes en ms
  const SESSION_KEY   = 'cand_unlocked_' + PAGE_SLUG;
  const LOCK_KEY      = 'cand_locked_' + PAGE_SLUG;
  const LOCK_TIME_KEY = 'cand_lock_time_' + PAGE_SLUG;
  const ATTEMPT_KEY   = 'cand_attempts_' + PAGE_SLUG;

  /* ── Éléments DOM ── */
  const splash     = document.getElementById('candSplash');
  const page       = document.querySelector('.cand-page');
  const digits     = document.querySelectorAll('.cand-code-digit');
  const codeInput  = document.querySelector('.cand-code-input');
  const validateBtn = document.getElementById('candValidate');
  const errorMsg   = document.getElementById('candError');
  const adminPanel = document.getElementById('candAdmin');
  const scoreBar   = document.querySelector('.cand-score-bar');

  /* ── Vérifier si déjà déverrouillé en session ── */
  if (sessionStorage.getItem(SESSION_KEY) === '1') {
    revealPage(false);
    return;
  }

  /* ── Vérifier si verrouillé ── */
  const lockTime = localStorage.getItem(LOCK_TIME_KEY);
  if (lockTime) {
    const elapsed = Date.now() - parseInt(lockTime, 10);
    if (elapsed < LOCK_DURATION) {
      showLocked(Math.ceil((LOCK_DURATION - elapsed) / 60000));
      return;
    } else {
      // Verrou expiré — réinitialiser
      localStorage.removeItem(LOCK_KEY);
      localStorage.removeItem(LOCK_TIME_KEY);
      localStorage.removeItem(ATTEMPT_KEY);
    }
  }

  /* ── Gestion des inputs digit par digit ── */
  digits.forEach((digit, index) => {
    digit.addEventListener('input', (e) => {
      // N'accepter que les chiffres
      const val = e.target.value.replace(/\D/g, '');
      e.target.value = val.slice(-1); // un seul caractère

      if (e.target.value) {
        e.target.classList.add('filled');
        // Passer au digit suivant
        if (index < digits.length - 1) {
          digits[index + 1].focus();
        } else {
          // Dernier digit — valider automatiquement
          validateCode();
        }
      } else {
        e.target.classList.remove('filled');
      }
    });

    digit.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && index > 0) {
        digits[index - 1].focus();
        digits[index - 1].value = '';
        digits[index - 1].classList.remove('filled');
      }
      if (e.key === 'Enter') {
        validateCode();
      }
    });

    // Sélectionner le contenu au focus pour faciliter la saisie
    digit.addEventListener('focus', () => {
      digit.select();
    });
  });

  /* ── Bouton valider ── */
  if (validateBtn) {
    validateBtn.addEventListener('click', validateCode);
  }

  /* ── Validation du code ── */
  function validateCode() {
    const entered = Array.from(digits).map(d => d.value).join('');

    if (entered.length < 6) {
      showError('Code incomplet — 6 chiffres attendus');
      return;
    }

    if (entered === String(PAGE_CODE)) {
      // Succès
      sessionStorage.setItem(SESSION_KEY, '1');
      localStorage.removeItem(ATTEMPT_KEY);
      revealPage(true);
    } else {
      // Échec
      const attempts = parseInt(localStorage.getItem(ATTEMPT_KEY) || '0', 10) + 1;
      localStorage.setItem(ATTEMPT_KEY, attempts);

      if (attempts >= MAX_ATTEMPTS) {
        // Verrouiller
        localStorage.setItem(LOCK_KEY, '1');
        localStorage.setItem(LOCK_TIME_KEY, Date.now());
        localStorage.removeItem(ATTEMPT_KEY);
        showLocked(5);
      } else {
        const remaining = MAX_ATTEMPTS - attempts;
        showError('Code incorrect — ' + remaining + ' tentative' + (remaining > 1 ? 's' : '') + ' restante' + (remaining > 1 ? 's' : ''));
        shakeInput();
        clearDigits();
      }
    }
  }

  function showError(msg) {
    if (!errorMsg) return;
    errorMsg.textContent = msg;
    errorMsg.classList.add('visible');
    setTimeout(() => errorMsg.classList.remove('visible'), 3000);
  }

  function shakeInput() {
    if (!codeInput) return;
    codeInput.classList.remove('shake');
    void codeInput.offsetWidth; // reflow
    codeInput.classList.add('shake');
    setTimeout(() => codeInput.classList.remove('shake'), 400);
  }

  function clearDigits() {
    digits.forEach(d => {
      d.value = '';
      d.classList.remove('filled');
    });
    if (digits[0]) digits[0].focus();
  }

  function showLocked(minutesLeft) {
    if (!splash) return;
    const inner = splash.querySelector('.cand-splash-inner');
    if (!inner) return;
    inner.innerHTML = `
      <p class="cand-splash-label">Accès refusé</p>
      <p class="cand-splash-locked">
        Trop de tentatives incorrectes.<br>
        Accès verrouillé pour ${minutesLeft} minute${minutesLeft > 1 ? 's' : ''}.<br>
        <span style="color:var(--text-subtle)">Réessayez dans quelques instants.</span>
      </p>
    `;
  }

  /* ── Révélation de la page ── */
  function revealPage(animated) {
    if (splash) {
      if (animated) {
        splash.classList.add('unlocking');
        setTimeout(() => {
          splash.style.display = 'none';
          animatePage();
        }, 900);
      } else {
        splash.style.display = 'none';
        animatePage(false);
      }
    }

    if (page) {
      page.classList.add('revealed');
    }
  }

  function animatePage(withGsap = true) {
    if (!page) return;

    if (withGsap && typeof gsap !== 'undefined') {
      // Animation d'entrée GSAP sur les sections
      const sections = page.querySelectorAll('.cand-section');
      gsap.from(sections, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.1
      });

      // Animation stagger des lignes de matching
      const matchRows = page.querySelectorAll('.cand-match-row');
      matchRows.forEach((row, i) => {
        setTimeout(() => {
          row.classList.add('visible');
        }, 400 + i * 80);
      });
    } else {
      // Fallback sans GSAP
      page.querySelectorAll('.cand-match-row').forEach(row => {
        row.classList.add('visible');
      });
    }

    // Scroll reveal pour les éléments .cand-reveal
    initScrollReveal();

    // Panel admin
    initAdminPanel();

    // Curseur custom
    initCursor();
  }

  /* ── Scroll reveal ── */
  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.cand-reveal');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => observer.observe(el));
  }

  /* ── Panel admin ── */
  function initAdminPanel() {
    if (!adminPanel) return;

    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === '1') {
      adminPanel.style.display = 'block';
    }

    const copyBtn = document.getElementById('candAdminCopy');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const url = window.location.origin + window.location.pathname;
        const text = `Lien : ${url}\nCode : ${PAGE_CODE}`;
        navigator.clipboard.writeText(text).then(() => {
          copyBtn.textContent = '✓ Copié';
          setTimeout(() => { copyBtn.textContent = 'Copier'; }, 2000);
        });
      });
    }
  }

  /* ── Curseur custom ── */
  function initCursor() {
    const cursorDot  = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');
    if (!cursorDot || !cursorRing) return;

    document.addEventListener('mousemove', (e) => {
      cursorDot.style.left  = e.clientX + 'px';
      cursorDot.style.top   = e.clientY + 'px';
      cursorRing.style.left = e.clientX + 'px';
      cursorRing.style.top  = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
    });
  }

})();
