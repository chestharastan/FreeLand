/**
 * Media placeholders.
 * Each `<figure class="ph" data-src="/images/cafe/x.webp" data-alt="...">` reserves its
 * aspect ratio (CSS `--ratio`) and shows a labelled slot. On boot we probe the real file;
 * if it exists we swap in an <img> — so dropping assets into /public/images/cafe/ is the
 * only step needed to "upload" media later. Missing files stay as clearly labelled slots.
 */
export function initPlaceholders(root = document) {
  const slots = root.querySelectorAll('.ph[data-src]');
  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        for (const e of entries) if (e.isIntersecting) { io.unobserve(e.target); probe(e.target); }
      }, { rootMargin: '600px 0px' })
    : null;
  slots.forEach((el) => (io ? io.observe(el) : probe(el)));
}

function probe(fig) {
  const src = fig.dataset.src;
  const img = new Image();
  // No loading="lazy" here: browsers never load a lazy image that is not in the page yet, and this
  // one is only inserted after it loads. The observer above already waits until the slot is near.
  img.decoding = 'async';
  img.alt = fig.dataset.alt || '';
  img.onload = () => {
    img.className = 'ph__img';
    fig.prepend(img);
    fig.classList.add('ph--loaded');
    fig.dataset.state = 'loaded';
  };
  img.onerror = () => { fig.dataset.state = 'missing'; };
  img.src = src;
}
