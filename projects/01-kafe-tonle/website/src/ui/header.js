/** Header: frosted background after scrolling, mobile nav, active link tracking, language toggle. */
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { toast } from '../utils/dom.js';

// Sections that should light up a nav item other than their own id.
const NAV_ALIAS = { 'full-menu': 'menu', order: 'menu', 'story-more': 'our-story' };

export function initHeader() {
  const header = document.getElementById('header');
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  ScrollTrigger.create({ start: 'top -60', end: 'max', toggleClass: { targets: header, className: 'is-scrolled' } });

  const closeNav = () => {
    document.body.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
  };
  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeNav));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });

  document.querySelectorAll('main section[id]').forEach((sec) => {
    const key = NAV_ALIAS[sec.id] || sec.id;
    const link = nav.querySelector(`a[data-nav="${key}"]`);
    if (!link) return;
    ScrollTrigger.create({
      trigger: sec, start: 'top 50%', end: 'bottom 50%',
      onToggle: (self) => { if (self.isActive) { nav.querySelectorAll('a').forEach((a) => a.classList.toggle('is-active', a === link)); } },
    });
  });

  document.querySelectorAll('.lang__btn').forEach((btn) => btn.addEventListener('click', () => {
    if (btn.dataset.lang === 'km') {
      toast('ភាសាខ្មែរ · Khmer copy ships with the localisation pass (next-intl). English is canonical in this preview.', 4200);
    }
  }));
}
