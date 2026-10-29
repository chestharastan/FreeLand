/** Phone mock-up order tracker: Received → Preparing → Ready → Collected, driven by scroll through the ordering section. */
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MESSAGES = [
  "We'll update the status as your drink is prepared.",
  'Your order is being made.',
  "It's ready! Please collect it at the counter.",
  'Thanks for visiting.',
];

export function initTracker({ reduced }) {
  const phone = document.querySelector('.order .phone');
  const steps = Array.from(document.querySelectorAll('#tracker li'));
  const status = document.getElementById('tracker-status');
  if (!phone || !steps.length) return;
  let last = -1;
  const set = (i) => {
    if (i === last) return;
    last = i;
    steps.forEach((li, k) => { li.classList.toggle('is-done', k <= i); li.classList.toggle('is-current', k === i); });
    status.textContent = MESSAGES[i];
  };
  if (reduced) { set(2); return; }
  ScrollTrigger.create({
    trigger: phone, start: 'top 95%', end: 'center 35%',
    onUpdate: (self) => set(Math.min(3, Math.floor(self.progress * 4))),
    onLeaveBack: () => set(0),
  });
  set(0);
}
