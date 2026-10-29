/** Contact form: client-side validation, saves to a local "demo inbox" — no email is ever sent. */
const INBOX_KEY = 'kt-demo-inbox';

export function initContact() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    let ok = true;
    for (const name of ['name', 'email', 'message']) {
      const field = form.elements[name].closest('.field');
      const value = String(data[name] || '').trim();
      const valid = name === 'email' ? /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value) : value.length > 0;
      field.classList.toggle('is-invalid', !valid);
      ok = ok && valid;
    }
    if (!ok) { status.textContent = 'Please complete the highlighted fields.'; status.className = 'form__status is-error'; return; }
    try {
      const inbox = JSON.parse(localStorage.getItem(INBOX_KEY) || '[]');
      inbox.push({ ...data, at: new Date().toISOString() });
      localStorage.setItem(INBOX_KEY, JSON.stringify(inbox));
    } catch { /* storage unavailable (private mode) — still confirm, nothing is sent anyway */ }
    form.reset();
    form.querySelectorAll('.is-invalid').forEach((f) => f.classList.remove('is-invalid'));
    status.textContent = 'Message saved in the demo inbox. No email was sent.';
    status.className = 'form__status is-ok';
  });
}
