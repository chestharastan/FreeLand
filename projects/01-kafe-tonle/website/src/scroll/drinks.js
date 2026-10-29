/**
 * Signature drinks — the pinned colour-block slideshow.
 * The section pins for ~4 viewports; scroll progress selects the active slide, morphs the
 * page theme, animates the slide copy and exposes `state` to the 3D scene (liquid colour,
 * ingredient sets, glass rotation all follow `state.progress`).
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { applyTheme } from './themes.js';
import { scrollToY } from './smoothScroll.js';
import { splitWords } from './reveal.js';

export function initDrinks({ reduced, lenis }) {
  const section = document.querySelector('.drinks');
  const pin = section.querySelector('.drinks__pin');
  const slides = Array.from(section.querySelectorAll('.slide'));
  const dots = Array.from(section.querySelectorAll('.drinks__dots button'));
  const n = slides.length;
  const state = { progress: 0, index: 0, local: 0, active: false, count: n };

  // An outline copy of each name sits in front of the drink: over the solid name it disappears, and
  // across the glass it traces the letters the drink hides, so the name always reads.
  slides.forEach((slide) => {
    const name = slide.querySelector('.slide__name');
    splitWords(name);
    const outline = document.createElement('div');
    outline.className = `${name.className} slide__name--outline`;
    outline.setAttribute('aria-hidden', 'true');
    outline.innerHTML = name.innerHTML;
    name.after(outline);
  });

  function activate(i, animate = true) {
    state.index = i;
    slides.forEach((s, k) => s.classList.toggle('is-active', k === i));
    dots.forEach((d, k) => { d.classList.toggle('is-active', k === i); d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
    applyTheme(slides[i].dataset.theme);
    if (!animate || reduced) return;
    const words = slides[i].querySelectorAll('.slide__name .word__in');
    const copy = slides[i].querySelector('.slide__copy');
    const photo = slides[i].querySelector('.slide__photo');
    gsap.killTweensOf([words, copy, photo]);
    gsap.fromTo(words, { yPercent: 105 }, { yPercent: 0, duration: 0.7, ease: 'power3.out', stagger: 0.06 });
    gsap.fromTo(copy, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out', delay: 0.1 });
    // The drink rises into place over the name with a small turn, as if it were set down on the bar.
    // yPercent, not y: parallax.js scrubs `y` on the same element.
    if (photo) {
      gsap.fromTo(photo,
        { yPercent: 14, rotation: -7, scale: 0.9, opacity: 0 },
        { yPercent: 0, rotation: 0, scale: 1, opacity: 1, duration: 0.95, ease: 'expo.out', delay: 0.05 });
    }
  }

  const trigger = ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: () => '+=' + Math.round(window.innerHeight * 0.9 * n),
    pin,
    pinSpacing: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    refreshPriority: 1, // measure the pin before every trigger that sits below it
    onToggle: (self) => { state.active = self.isActive; },
    onUpdate: (self) => {
      state.progress = self.progress;
      const f = Math.min(n - 0.0001, self.progress * n);
      const i = Math.floor(f);
      state.local = f - i;
      if (i !== state.index) activate(i);
    },
  });

  dots.forEach((d) => d.addEventListener('click', () => {
    const i = Number(d.dataset.goto);
    const y = trigger.start + ((i + 0.5) / n) * (trigger.end - trigger.start);
    scrollToY(y, lenis);
  }));

  // Keyboard: arrows move between drinks while the section is pinned.
  window.addEventListener('keydown', (e) => {
    if (!state.active || !['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
    const i = Math.max(0, Math.min(n - 1, state.index + (e.key === 'ArrowRight' ? 1 : -1)));
    scrollToY(trigger.start + ((i + 0.5) / n) * (trigger.end - trigger.start), lenis);
  });

  return { state, trigger };
}
