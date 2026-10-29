/** Soft gold cursor dot on pointer devices; grows over interactive elements. */
import gsap from 'gsap';

export function initCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  const c = document.getElementById('cursor');
  if (!c) return;
  gsap.set(c, { xPercent: -50, yPercent: -50, scale: 0 });
  const xTo = gsap.quickTo(c, 'x', { duration: 0.18, ease: 'power3' });
  const yTo = gsap.quickTo(c, 'y', { duration: 0.18, ease: 'power3' });
  let shown = false;
  window.addEventListener('pointermove', (e) => {
    xTo(e.clientX); yTo(e.clientY);
    if (!shown) { shown = true; gsap.to(c, { scale: 1, duration: 0.3 }); }
  }, { passive: true });
  document.addEventListener('pointerover', (e) => {
    const hot = !!e.target.closest('a, button, summary, input, select, textarea, [data-goto]');
    gsap.to(c, { scale: hot ? 3 : 1, opacity: hot ? 0.55 : 1, duration: 0.25, overwrite: 'auto' });
  });
  document.addEventListener('pointerleave', () => { shown = false; gsap.to(c, { scale: 0, duration: 0.25 }); });
}
