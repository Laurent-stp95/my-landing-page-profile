/* =============================================
   BUILD TERMINAL — Discovery → Design → POC → Delivery
   Typing animation en boucle. Monochrome.
   ============================================= */

(function () {
  const body = document.getElementById('termBody');
  const phaseBadge = document.getElementById('termPhase');
  if (!body || !phaseBadge) return;

  // Respect reduced-motion : afficher tout, pas d'animation
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Séquence : type = prompt ($) | output (›) | ship (✓). phase = badge.
  const SCRIPT = [
    { phase: 'discovery', type: 'prompt', text: 'discovery — pourquoi 40% d\'abandon à l\'inscription ?' },
    { phase: 'discovery', type: 'output', text: 'interviews : formulaires rigides, zéro import de liste' },
    { phase: 'discovery', type: 'output', text: 'data : drop-off au champ 4/7, aucune relance' },
    { phase: 'design',    type: 'prompt', text: 'design — spec + wireframe du parcours' },
    { phase: 'design',    type: 'output', text: 'PRD rédigé · formulaire modulaire · import CSV · relances' },
    { phase: 'design',    type: 'output', text: 'prototype Figma validé avec 3 organisateurs' },
    { phase: 'poc',       type: 'prompt', text: 'poc — build du champ conditionnel' },
    { phase: 'poc',       type: 'output', text: 'field.rules = mapCSV(cols) → preview live' },
    { phase: 'poc',       type: 'output', text: 'tests OK · recette avec l\'équipe dev' },
    { phase: 'ship',      type: 'prompt', text: 'ship — mise en production' },
    { phase: 'ship',      type: 'ship',   text: 'shipped — +35,3% d\'événements · −40% tickets support' },
  ];

  const TYPE_MS = 18;      // ms par caractère
  const LINE_PAUSE = 420;  // pause entre lignes
  const END_PAUSE = 4200;  // pause avant reset boucle

  let timer = null;

  function makeLine(item) {
    const el = document.createElement('span');
    el.className = 'term-line ' + (
      item.type === 'prompt' ? 'is-prompt' :
      item.type === 'ship' ? 'is-ship' : 'is-output'
    );
    return el;
  }

  function setPhase(phase) {
    phaseBadge.textContent = phase;
    phaseBadge.setAttribute('data-phase', phase);
  }

  function cursor() {
    const c = document.createElement('span');
    c.className = 'term-cursor';
    return c;
  }

  function runStatic() {
    // reduced-motion : tout afficher d'un coup
    body.innerHTML = '';
    SCRIPT.forEach(item => {
      const el = makeLine(item);
      el.textContent = item.text;
      body.appendChild(el);
    });
    setPhase('ship');
  }

  function typeLine(index) {
    if (index >= SCRIPT.length) {
      // fin : pause puis reset
      const c = cursor();
      body.appendChild(c);
      timer = setTimeout(() => {
        body.innerHTML = '';
        setPhase(SCRIPT[0].phase);
        typeLine(0);
      }, END_PAUSE);
      return;
    }

    const item = SCRIPT[index];
    setPhase(item.phase);

    const el = makeLine(item);
    body.appendChild(el);
    const c = cursor();
    body.appendChild(c);

    let i = 0;
    (function typeChar() {
      if (i <= item.text.length) {
        el.textContent = item.text.slice(0, i);
        i++;
        timer = setTimeout(typeChar, TYPE_MS);
      } else {
        c.remove();
        timer = setTimeout(() => typeLine(index + 1), LINE_PAUSE);
      }
    })();
  }

  if (reduce) {
    runStatic();
  } else {
    // Démarre après l'apparition de la fenêtre (anim CSS ~1.3s + 0.8s)
    setTimeout(() => typeLine(0), 1600);
  }
})();
