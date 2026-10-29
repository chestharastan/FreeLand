/**
 * Smooth scrolling (Lenis) wired into GSAP's ticker + ScrollTrigger.
 * Pointer devices only: touch devices keep native momentum scrolling (cheaper and
 * what users expect), and reduced-motion users get native scroll as well.
 */
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isTouch } from '../utils/device.js';

const OFFSET = 108; // ribbon (36) + header (72): keeps anchored headings below the fixed bars

export function initSmoothScroll({ reduced }) {
  if (reduced || isTouch()) return null;

  const lenis = new Lenis({
    lerp: 0.085,
    smoothWheel: true,
    wheelMultiplier: 0.95,
    anchors: { offset: -OFFSET },
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  document.documentElement.classList.add('lenis');
  return lenis;
}

/** Scroll to an absolute document position using Lenis when present, else native. */
export function scrollToY(y, lenis, immediate = false) {
  if (lenis) lenis.scrollTo(y, { immediate, duration: 1.1 });
  else window.scrollTo({ top: y, behavior: immediate ? 'auto' : 'smooth' });
}
