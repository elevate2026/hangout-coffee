// Hangout coffee — 控えめなスクロール演出（fade / rise）
// 使い方: 要素に data-rv（＋任意で data-rvd="120" 遅延ms）/ ヒーローは data-hs="0..n"
// prefers-reduced-motion では何もしない。React管理外のプロパティのみ操作する。

export function initFX() {
  let reduced = false;
  try { reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  if (reduced || typeof IntersectionObserver === 'undefined') return function () {};

  const easing = 'cubic-bezier(.22,.61,.36,1)';

  // ヒーローの段階表示（読み込み直後・短時間で必ず表示される）
  const hsEls = Array.prototype.slice.call(document.querySelectorAll('[data-hs]'));
  hsEls.forEach(function (el) {
    const i = parseFloat(el.getAttribute('data-hs')) || 0;
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .7s ' + easing + ' ' + (0.05 + 0.1 * i) + 's, transform .7s ' + easing + ' ' + (0.05 + 0.1 * i) + 's';
  });
  setTimeout(function () {
    hsEls.forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, 60);

  // スクロールで現れる要素（十分に画面外のものだけを対象にする）
  const rvEls = Array.prototype.slice.call(document.querySelectorAll('[data-rv]'));
  let fired = false;
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      fired = true;
      const el = entry.target;
      const d = parseFloat(el.getAttribute('data-rvd')) || 0;
      el.style.transitionDelay = d + 'ms';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      io.unobserve(el);
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

  rvEls.forEach(function (el) {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 1.1) { return; } // 初期表示域とその直下は隠さない
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .7s ' + easing + ', transform .7s ' + easing;
    io.observe(el);
  });

  // 保険: observer が一度も発火しない環境では 5 秒後に全て表示
  const rescue = setTimeout(function () {
    if (fired) return;
    rvEls.forEach(function (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; });
  }, 5000);

  return function () { io.disconnect(); clearTimeout(rescue); };
}
