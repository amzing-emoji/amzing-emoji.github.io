const siteLoader = document.querySelector('[data-site-loader]');

if (siteLoader) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion) {
    const startedAt = performance.now();
    let finished = false;
    siteLoader.hidden = false;
    const dismissLoader = () => {
      if (finished) return;
      finished = true;
      window.setTimeout(() => {
        siteLoader.classList.add('is-leaving');
        window.setTimeout(() => { siteLoader.hidden = true; }, 220);
      }, Math.max(0, 700 - (performance.now() - startedAt)));
    };
    window.setTimeout(dismissLoader, 3000);
    if (document.readyState === 'complete') dismissLoader();
    else window.addEventListener('load', dismissLoader, { once: true });
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) siteLoader.hidden = true;
    });
  }
}

const menuButton = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menu.hidden = expanded;
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
    });
  });
}

const admissionButton = document.querySelector('[data-admission-button]');
const admissionResult = document.querySelector('[data-admission-result]');

if (admissionButton && admissionResult) {
  const messages = [
    '你的入学关键词是「好奇」。请带着问题，去认识新的世界。',
    '你的入学关键词是「勇气」。今天就从一声响亮的“呱”开始。',
    '你的入学关键词是「想象」。奇怪的想法，也值得认真研究。',
    '你的入学关键词是「松弛」。认真学习，也记得给自己留白。'
  ];
  let next = 0;
  admissionButton.addEventListener('click', () => {
    admissionResult.textContent = messages[next];
    next = (next + 1) % messages.length;
  });
}
