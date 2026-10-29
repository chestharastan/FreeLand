/**
 * Full menu: category groups, chips (including "New"), search, branch-specific sold-out state
 * and demo KHR conversion. Items live in plain HTML (see tools/build_menu.py to regenerate).
 */
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Explicitly fictitious demo conversion rate (foundation §6): never presented as a real FX rate.
export const DEMO_FX_KHR_PER_USD = 4100;

export function initMenu() {
  const list = document.getElementById('menu-list');
  if (!list) return;
  const groups = Array.from(list.querySelectorAll('.menucat'));
  const items = Array.from(list.querySelectorAll('.item'));
  const chips = Array.from(document.querySelectorAll('.chip'));
  const search = document.getElementById('menu-search');
  const branch = document.getElementById('menu-branch');
  const empty = document.getElementById('menu-empty');
  const summary = document.getElementById('menu-summary');
  const summaryDefault = summary ? summary.textContent : '';

  document.querySelectorAll('.khr[data-usd]').forEach((el) => {
    const usd = parseFloat(el.dataset.usd);
    const khr = Math.round((usd * DEMO_FX_KHR_PER_USD) / 100) * 100;
    el.textContent = `≈ ៛${khr.toLocaleString('en-US')} · demo rate`;
  });

  let cat = 'all', q = '', refreshTimer;
  const inCategory = (it) => (cat === 'new' ? it.hasAttribute('data-new') : cat === 'all' || it.dataset.cat === cat);

  function apply() {
    const b = branch.value;
    let shown = 0;
    for (const it of items) {
      const desc = it.querySelector('.item__body p');
      const hay = `${it.dataset.name} ${it.dataset.tags || ''} ${desc ? desc.textContent : ''}`.toLowerCase();
      const okQ = !q || hay.includes(q);
      const soldOut = (it.dataset.soldout || '').split(',').filter(Boolean).includes(b);
      it.classList.toggle('is-soldout', soldOut);
      it.querySelector('.avail').textContent = soldOut ? 'Sold out here' : 'Available here';
      it.querySelector('.btn').setAttribute('aria-disabled', String(soldOut));
      const visible = inCategory(it) && okQ;
      it.classList.toggle('is-hidden', !visible);
      if (visible) shown++;
    }
    // Hide whole categories that have nothing to show; keep the live count in each heading.
    for (const g of groups) {
      const n = g.querySelectorAll('.item:not(.is-hidden)').length;
      g.classList.toggle('is-hidden', n === 0);
      const count = g.querySelector('.menucat__count');
      if (count) count.textContent = `${n} ${n === 1 ? 'item' : 'items'}`;
    }
    empty.hidden = shown > 0;
    if (summary) summary.textContent = shown === items.length ? summaryDefault : `Showing ${shown} of ${items.length} items`;
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 120); // grid height changed
  }

  chips.forEach((c) => c.addEventListener('click', () => {
    chips.forEach((x) => { const on = x === c; x.classList.toggle('is-active', on); x.setAttribute('aria-pressed', String(on)); });
    cat = c.dataset.cat;
    apply();
  }));
  search.addEventListener('input', () => { q = search.value.trim().toLowerCase(); apply(); });
  branch.addEventListener('change', apply);
  apply();
}
