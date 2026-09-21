(function () {
  var btn = document.querySelector(".menu-toggle");
  var body = document.getElementById("sidebar-body");
  if (!btn || !body) return;
  btn.addEventListener("click", function () {
    var open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    body.classList.toggle("open", !open);
  });
  body.addEventListener("click", function (e) {
    if (e.target.tagName === "A" && window.matchMedia("(max-width: 900px)").matches) {
      btn.setAttribute("aria-expanded", "false");
      body.classList.remove("open");
    }
  });
})();
