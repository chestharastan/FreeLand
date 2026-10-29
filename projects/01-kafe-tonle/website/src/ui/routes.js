/**
 * Route stubs. Links marked `data-route` point at pages that belong to the full Next.js build
 * (/menu/[slug], /order/[token], /locations/[branch], /rewards …). Instead of a dead link we open
 * a small dialog that names the route and what it will do — "intentionally marked demo screens"
 * as the foundation requires.
 */
export function initRoutes() {
  const modal = document.getElementById('route-modal');
  const title = document.getElementById('route-title');
  const path = document.getElementById('route-path');
  const note = document.getElementById('route-note');
  let lastFocus = null;

  function open(anchor) {
    lastFocus = anchor;
    title.textContent = anchor.dataset.route || 'Page';
    path.textContent = new URL(anchor.getAttribute('href'), location.origin).pathname;
    note.textContent = anchor.dataset.routeNote || '';
    modal.hidden = false;
    window.__lenis?.stop();
    modal.querySelector('.btn[data-close]').focus();
  }
  function close() {
    if (modal.hidden) return;
    modal.hidden = true;
    window.__lenis?.start();
    lastFocus?.focus();
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-route]');
    if (!a) return;
    e.preventDefault();
    open(a);
  });
  modal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', close));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  // Simple focus trap.
  modal.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusables = modal.querySelectorAll('button, [href], input, select, textarea');
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}
