/**
 * DOM parallax + zoom.
 *  - `[data-depth="0.3"]` drifts vertically against the scroll of its section (positive = slower than
 *    the page, negative = faster), giving the layered Simply-Chocolate feel without 3D.
 *  - `[data-zoom]` scales from 1.12 → 1 while its section travels through the viewport.
 */
import gsap from 'gsap';

const TRAVEL = 120; // px of total drift at depth 1

export function initParallax({ reduced }) {
  if (reduced) return;
  document.querySelectorAll('[data-depth]').forEach((el) => {
    const depth = parseFloat(el.dataset.depth) || 0;
    const section = el.closest('.section') || el;
    gsap.fromTo(el, { y: depth * TRAVEL }, {
      y: -depth * TRAVEL, ease: 'none',
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
    });
  });
  document.querySelectorAll('[data-zoom]').forEach((el) => {
    gsap.fromTo(el, { scale: 1.12 }, {
      scale: 1, ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'center center', scrub: 0.6 },
    });
  });
}
