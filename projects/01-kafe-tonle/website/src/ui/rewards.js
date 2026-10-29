/** Rewards: rules toggle + stamp card that fills (0 → 6 of 9) as it scrolls into view. */
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initRewards({ reduced }) {
  const btn = document.getElementById('rewards-toggle');
  const rules = document.getElementById('rewards-rules');
  btn?.addEventListener('click', () => {
    const open = rules.hidden;
    rules.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Hide reward rules' : 'How rewards work';
    setTimeout(() => ScrollTrigger.refresh(), 50);
  });

  const card = document.getElementById('stampcard');
  if (!card) return;
  const stamps = Array.from(card.querySelectorAll('.stamp:not(.stamp--free)'));
  const status = document.getElementById('stamp-status');
  const target = Number(card.dataset.stamps) || 6;
  let last = -1;
  const set = (n) => {
    if (n === last) return;
    last = n;
    stamps.forEach((s, k) => s.classList.toggle('is-filled', k < n));
    status.textContent = `You have ${n} of 9 stamps toward your next free drink.`;
  };
  if (reduced) { set(target); return; }
  ScrollTrigger.create({ trigger: card, start: 'top 90%', end: 'top 40%', onUpdate: (self) => set(Math.round(self.progress * target)) });
  set(0);
}
