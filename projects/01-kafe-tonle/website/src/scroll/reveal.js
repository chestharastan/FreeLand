/**
 * Entrance reveals.
 *  - `[data-split]` headings are split into masked words that rise into place.
 *  - `[data-reveal]` blocks fade/slide up once when they enter the viewport.
 * Nothing is hidden by CSS, so content stays readable without JS or with reduced motion.
 */
import gsap from 'gsap';

/** Wrap each word of an element in <span class="word"><span class="word__in">…</span></span>, keeping inline tags like <em>. */
export function splitWords(el) {
  if (el.dataset.splitDone) return Array.from(el.querySelectorAll('.word__in'));
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  for (const node of textNodes) {
    const parts = node.nodeValue.split(/(\s+)/);
    const frag = document.createDocumentFragment();
    for (const part of parts) {
      if (!part) continue;
      if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); continue; }
      const outer = document.createElement('span'); outer.className = 'word';
      const inner = document.createElement('span'); inner.className = 'word__in'; inner.textContent = part;
      outer.appendChild(inner); frag.appendChild(outer);
    }
    node.parentNode.replaceChild(frag, node);
  }
  el.dataset.splitDone = '1';
  return Array.from(el.querySelectorAll('.word__in'));
}

export function initReveals({ reduced }) {
  // Split all headings (also the slide names used by drinks.js) so layout is final before ScrollTrigger measures.
  document.querySelectorAll('[data-split], .slide__name').forEach(splitWords);
  if (reduced) return;

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    const words = el.hasAttribute('data-split') ? el.querySelectorAll('.word__in') : null;
    if (words && words.length) {
      gsap.from(words, {
        yPercent: 110, duration: 0.9, ease: 'power3.out', stagger: 0.045,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    } else {
      gsap.from(el, {
        y: 34, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    }
  });
}
