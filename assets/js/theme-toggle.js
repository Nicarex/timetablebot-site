(function(){
  if (window.__themeToggleInitialized) return;
  window.__themeToggleInitialized = true;

  const STORAGE_KEYS = ['just-the-docs-theme', 'jtd-theme', 'theme', 'color-scheme'];
  function normalize(t){ return t === 'dark' ? 'dark' : 'light'; }

  function saveAll(theme){
    try{ STORAGE_KEYS.forEach(k => localStorage.setItem(k, theme)); } catch(e){}
  }

  function applyTheme(theme){
    theme = normalize(theme);
    if (window.jtd && typeof jtd.setTheme === 'function') {
      try { jtd.setTheme(theme); } catch(e) {}
    } else {
      try { document.documentElement.setAttribute('data-color-scheme', theme); } catch(e) {}
    }
    saveAll(theme);
  }

  function getSaved(){
    if (window.jtd && typeof jtd.getTheme === 'function'){
      try { const t = jtd.getTheme(); if (t) return normalize(t); } catch(e) {}
    }
    for (const k of STORAGE_KEYS){
      try { const v = localStorage.getItem(k); if (v) return normalize(v); } catch(e) {}
    }
    return null;
  }

  function updateButtonText(btn){
    if (!btn) return;
    const current = (window.jtd && typeof jtd.getTheme === 'function') ? jtd.getTheme() : document.documentElement.getAttribute('data-color-scheme');
    const theme = normalize(current);
    btn.textContent = theme === 'dark' ? 'Включить светлую тему' : 'Включить темную тему';
  }

  function initForButton(btn){
    if (!btn) return;
    const saved = getSaved();
    if (saved) applyTheme(saved);
    updateButtonText(btn);

    btn.addEventListener('click', function(){
      const current = (window.jtd && typeof jtd.getTheme === 'function') ? jtd.getTheme() : document.documentElement.getAttribute('data-color-scheme') || 'light';
      const next = normalize(current) === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      updateButtonText(btn);
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){
      initForButton(document.querySelector('.js-toggle-dark-mode'));
    });
  } else {
    initForButton(document.querySelector('.js-toggle-dark-mode'));
  }

  // If jtd appears later, make sure button text is in sync
  // (try a few times in case theme script loads after our script)
  let tries = 0;
  const syncInterval = setInterval(function(){
    const btn = document.querySelector('.js-toggle-dark-mode');
    if (btn) updateButtonText(btn);
    tries += 1;
    if (tries > 10) clearInterval(syncInterval);
  }, 300);
})();