/* =============================================
   CONTACT — copier l'adresse e-mail en un clic
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.footer-email');
  const status = document.getElementById('emailStatus');
  if (!btn) return;

  let timer = null;

  const show = (msg, ok) => {
    btn.classList.toggle('is-copied', ok);
    if (status) status.textContent = msg;
    clearTimeout(timer);
    timer = setTimeout(() => {
      btn.classList.remove('is-copied');
      if (status) status.textContent = '';
    }, 2200);
  };

  const fallbackCopy = (text) => {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    area.remove();
    return ok;
  };

  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy;
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch (e) {
      ok = fallbackCopy(text);
    }
    show(ok ? 'Adresse copiée' : 'Copie impossible, sélectionnez l’adresse', ok);
    if (ok && window.goatcounter) {
      window.goatcounter.count({ path: 'copy-email', title: 'Email copied', event: true });
    }
  });
});
