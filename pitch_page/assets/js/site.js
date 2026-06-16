(() => {
  const supportedLangs = new Set(['en', 'zh-cn', 'zh']);

  function applyLang(lang) {
    const nextLang = supportedLangs.has(lang) ? lang : 'en';

    document.body.classList.remove('lang-en', 'lang-zh-cn', 'lang-zh');
    document.body.classList.add(`lang-${nextLang}`);
    document.documentElement.lang =
      nextLang === 'zh-cn' ? 'zh-CN' : nextLang === 'zh' ? 'zh-Hant' : 'en';

    [
      ['btn-en', nextLang === 'en'],
      ['btn-zh-cn', nextLang === 'zh-cn'],
      ['btn-zh', nextLang === 'zh'],
    ].forEach(([id, isActive]) => {
      const button = document.getElementById(id);
      if (button) button.classList.toggle('active', isActive);
    });

    try {
      window.localStorage.setItem('pitch-page-lang', nextLang);
    } catch {
      /* Local storage can be unavailable in strict browser contexts. */
    }
  }

  function getInitialLang() {
    try {
      const stored = window.localStorage.getItem('pitch-page-lang');
      if (supportedLangs.has(stored)) return stored;
    } catch {
      /* Ignore storage failures and fall back to the body class. */
    }

    if (document.body.classList.contains('lang-zh-cn')) return 'zh-cn';
    if (document.body.classList.contains('lang-zh')) return 'zh';
    return 'en';
  }

  function initReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    if (!('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;
        window.setTimeout(() => entry.target.classList.add('visible'), index * 55);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });

    revealEls.forEach((el) => observer.observe(el));
  }

  window.setLang = applyLang;

  document.addEventListener('DOMContentLoaded', () => {
    applyLang(getInitialLang());
    initReveal();
  });
})();
