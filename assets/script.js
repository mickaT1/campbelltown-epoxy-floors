(function () {
  var y = document.getElementById("y");
  if (y) y.textContent = String(new Date().getFullYear());

  var form = document.getElementById("lead-form");
  var success = document.getElementById("form-success");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    var action = (form.getAttribute("action") || "").trim();
    var isPlaceholder = !action || action === "#" || action.indexOf("YOUR_") !== -1;

    if (isPlaceholder) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var data = new FormData(form);
      var payload = {};
      data.forEach(function (v, k) { payload[k] = v; });
      console.info("[lead preview]", payload);
      if (success) {
        success.hidden = false;
        success.textContent =
          "Thanks " + (payload.name || "") + " — enquiry captured in preview mode. " +
          "Connect Formspree or Getform on the form action to deliver leads.";
      }
      form.reset();
      return;
    }
  });
})();
