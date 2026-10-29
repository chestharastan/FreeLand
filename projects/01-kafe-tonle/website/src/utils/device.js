/** Device / motion preference detection. */
export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isTouch = () =>
  window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;

export const isDesktopLayout = () => window.matchMedia('(min-width: 900px)').matches;
