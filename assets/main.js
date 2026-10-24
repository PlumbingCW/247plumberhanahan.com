(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.menu-toggle');
  var drawer = document.getElementById('mob-drawer');
  var overlay = document.querySelector('.mob-overlay');
  if (!toggle || !drawer || !overlay) return;
  var closeBtn = drawer.querySelector('.mob-close');
  function setOpen(open) {
    drawer.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    root.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open && closeBtn) closeBtn.focus(); else if (!open) toggle.focus();
  }
  toggle.addEventListener('click', function () { setOpen(!drawer.classList.contains('open')); });
  overlay.addEventListener('click', function () { setOpen(false); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setOpen(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('open')) setOpen(false);
  });
  drawer.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });
  window.matchMedia('(min-width: 769px)').addEventListener('change', function (m) {
    if (m.matches && drawer.classList.contains('open')) setOpen(false);
  });
})();
