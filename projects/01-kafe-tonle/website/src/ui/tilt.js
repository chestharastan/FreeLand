/** Subtle 3D tilt for `.tilt` cards on pointer devices. */
import gsap from 'gsap';

export function initTilt() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll('.tilt').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(card, { rotateY: px * 10, rotateX: -py * 8, transformPerspective: 900, duration: 0.4, ease: 'power2.out' });
    });
    card.addEventListener('pointerleave', () => gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power3.out' }));
  });
}
