/**
 * Kafé Tonlé — concept website entry point.
 * Boot order: detect device → wire UI → smooth scroll + scroll effects → reveal page.
 * Everything degrades: reduced motion → static states; no JS → readable page.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './utils/device.js';
import { initPlaceholders } from './utils/placeholders.js';
import { setAppState } from './utils/dom.js';
import { initSmoothScroll } from './scroll/smoothScroll.js';
import { initThemes } from './scroll/themes.js';
import { initReveals } from './scroll/reveal.js';
import { initParallax } from './scroll/parallax.js';
import { initDrinks } from './scroll/drinks.js';
import { initHeader } from './ui/header.js';
import { initRoutes } from './ui/routes.js';
import { initMenu } from './ui/menu.js';
import { initTracker } from './ui/tracker.js';
import { initRewards } from './ui/rewards.js';
import { initContact } from './ui/contact.js';
import { initCursor } from './ui/cursor.js';
import { initTilt } from './ui/tilt.js';
import { initLoader } from './ui/loader.js';

gsap.registerPlugin(ScrollTrigger);
// Mobile browsers resize the viewport when the address bar hides; a full refresh there makes pins jump.
ScrollTrigger.config({ ignoreMobileResize: true });

function boot() {
  const html = document.documentElement;
  const reduced = prefersReducedMotion();
  html.classList.toggle('reduced-motion', reduced);

  const loader = initLoader();
  loader.progress(0.2);

  initPlaceholders();
  initRoutes();
  initMenu();
  initRewards({ reduced });
  initContact();
  initTilt();
  initCursor();

  const lenis = initSmoothScroll({ reduced });
  window.__lenis = lenis;
  // The pinned slideshow first: every trigger created afterwards measures with its pin spacing in place.
  const drinks = initDrinks({ reduced, lenis });
  initThemes({ reduced });
  initHeader();
  initReveals({ reduced });
  initParallax({ reduced });
  initTracker({ reduced });
  loader.progress(0.7);

  // The drinks pin adds scroll distance below it: sort triggers so the pin refreshes before the
  // sections after it measure their positions, then reveal the page.
  ScrollTrigger.sort();
  ScrollTrigger.refresh();
  (document.fonts?.ready || Promise.resolve()).then(() => ScrollTrigger.refresh());
  requestAnimationFrame(() => {
    loader.done();
    ScrollTrigger.refresh();
    setAppState('ready');
  });
  window.__kt = { reduced, drinks, ScrollTrigger };
}

try {
  boot();
} catch (err) {
  console.error(err);
  setAppState('error:' + (err && err.message));
  document.getElementById('loader')?.classList.add('is-done');
}
// Never trap a visitor behind the preloader.
setTimeout(() => document.getElementById('loader')?.classList.add('is-done'), 4500);
