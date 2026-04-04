(function () {
  function getLang() {
    return localStorage.getItem('lang') || 'ja';
  }

  function applyLang(lang) {
    var html = document.documentElement;
    if (lang === 'ja') {
      html.classList.add('ja-mode');
    } else {
      html.classList.remove('ja-mode');
    }

    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = lang === 'ja' ? 'English' : '日本語';
    }

    document.querySelectorAll('.site-nav .page-link[data-en][data-ja]').forEach(function (link) {
      link.textContent = lang === 'ja' ? link.getAttribute('data-ja') : link.getAttribute('data-en');
    });
  }

  window.toggleLang = function () {
    var next = getLang() === 'ja' ? 'en' : 'ja';
    localStorage.setItem('lang', next);
    applyLang(next);
  };

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getLang());
  });
})();
