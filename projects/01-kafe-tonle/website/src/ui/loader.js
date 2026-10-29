/** Preloader progress + dismissal. */
export function initLoader() {
  const el = document.getElementById('loader');
  const bar = el?.querySelector('.loader__bar i');
  let p = 0;
  return {
    progress(v) { p = Math.max(p, Math.min(1, v)); if (bar) bar.style.transform = `scaleX(${p})`; },
    done() {
      this.progress(1);
      if (!el) return;
      el.classList.add('is-done');
      setTimeout(() => el.remove(), 900);
    },
  };
}
