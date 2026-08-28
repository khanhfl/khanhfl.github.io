// Dark mode toggle. Remembers a visitor's choice in localStorage;
// defaults to light mode until they toggle it themselves.
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const stored = safeGet('theme');
  const initial = stored || 'light';

  applyTheme(initial);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      safeSet('theme', next);
    });
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    if (toggle) toggle.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }
})();
