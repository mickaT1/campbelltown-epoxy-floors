(function () {
  var y = document.getElementById("y");
  if (y) y.textContent = String(new Date().getFullYear());

  // Subtle scroll reveal (respects reduced motion)
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");
  if (reduceMotion) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

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
        success.classList.add("show");
        success.textContent =
          "Thanks " + (payload.name || "") + " — enquiry captured in preview mode. " +
          "Connect Formspree or Getform on the form action to deliver leads.";
      }
      form.reset();
      return;
    }
    // Live endpoint: allow native POST (or swap to fetch later).
  });
})();
