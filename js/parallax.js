/* =============================================
   PARALLAX — Hero geometry floating effect
   ============================================= */

   window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const geo = document.querySelector('.geo-circle');
    if (geo) {
      geo.style.transform = `translateY(${scroll * 0.15}px)`;
    }
  });