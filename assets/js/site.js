// Homepage panels open via the URL hash (#about, #research, #contact) using CSS :target.
// This adds: Esc to close, click outside a panel to close, and focus moves into the open panel.
(function () {
  if (!document.body.classList.contains("home")) return;

  function close() {
    if (location.hash && location.hash !== "#top") {
      var was = location.hash.slice(1);
      location.hash = "top";
      var nav = document.querySelector('.home-nav a[href="#' + was + '"]');
      if (nav) nav.focus({ preventScroll: true });
    }
  }

  function sync() {
    var open = document.querySelector(".panel:target");
    document.body.classList.toggle("panel-open", !!open);
    if (open) {
      window.scrollTo(0, 0);
      var title = open.querySelector(".panel-title");
      if (title) { title.setAttribute("tabindex", "-1"); title.focus({ preventScroll: true }); }
    }
  }

  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  document.addEventListener("click", function (e) {
    if (!document.body.classList.contains("panel-open")) return;
    if (e.target.closest(".panel")) return;
    close();
  });
  window.addEventListener("hashchange", sync);
  sync();
})();
