(function () {
  var y = document.getElementById("y");
  if (y) y.textContent = String(new Date().getFullYear());
})();

(function () {
  // Show success message after FormSubmit redirects back with ?sent=1
  var ok = document.getElementById("form-success");
  var form = document.getElementById("lead-form");
  if (ok && /[?&]sent=1/.test(location.search)) {
    ok.hidden = false;
    if (form) form.hidden = true;
    ok.scrollIntoView({ block: "center" });
  }
  // Prevent double submits
  if (form) form.addEventListener("submit", function () {
    var b = form.querySelector('button[type="submit"]');
    if (b) { b.disabled = true; b.textContent = "Sending…"; }
  });
})();
