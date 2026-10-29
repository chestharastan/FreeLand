/**
 * Section colour themes.
 * Every `[data-theme]` section announces itself when it crosses the middle of the
 * viewport; we tween the live CSS variables on :root so the whole page (background,
 * text, buttons, placeholders) morphs between colour blocks — the Simply Chocolate feel.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const THEMES = {
  cream:   { bg: '#F8F3E8', fg: '#0D514F', accent: '#734B36' },
  latte:   { bg: '#DCC6A6', fg: '#3B2419', accent: '#0D514F' },
  caramel: { bg: '#C27A3A', fg: '#2A170C', accent: '#4A2A12' },
  coconut: { bg: '#E8EFE9', fg: '#0D514F', accent: '#734B36' },
  citrus:  { bg: '#D8AD68', fg: '#2E1A10', accent: '#0D514F' },
  teal:    { bg: '#0D514F', fg: '#F8F3E8', accent: '#D8AD68' },
  coffee:  { bg: '#734B36', fg: '#F8F3E8', accent: '#D8AD68' },
  gold:    { bg: '#D8AD68', fg: '#2E1A10', accent: '#0D514F' },
  night:   { bg: '#07302F', fg: '#F8F3E8', accent: '#D8AD68' },
};

let current = 'cream';
let reducedMotion = false;
const meta = document.querySelector('meta[name="theme-color"]');

export function applyTheme(name) {
  const t = THEMES[name];
  if (!t || name === current) return;
  current = name;
  gsap.to(document.documentElement, {
    '--bg': t.bg, '--fg': t.fg, '--accent': t.accent,
    duration: reducedMotion ? 0 : 0.75, ease: 'power2.out', overwrite: 'auto',
  });
  if (meta) meta.setAttribute('content', t.bg);
  document.documentElement.dataset.theme = name;
}

export function currentTheme() { return current; }

export function initThemes({ reduced }) {
  reducedMotion = reduced;
  // The drinks section switches its own theme per slide (see drinks.js); skip the slides here.
  document.querySelectorAll('[data-theme]:not(.slide)').forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: el.tagName === 'FOOTER' ? 'top 80%' : 'top 55%',
      end: 'bottom 55%',
      onToggle: (self) => {
        if (!self.isActive) return;
        // Inside the pinned drinks section the active slide decides the colour.
        if (el.classList.contains('drinks')) {
          const active = el.querySelector('.slide.is-active');
          applyTheme(active ? active.dataset.theme : el.dataset.theme);
        } else {
          applyTheme(el.dataset.theme);
        }
      },
    });
  });
}
