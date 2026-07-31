(function () {
  "use strict";

  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var total = slides.length;
  var current = 0;

  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var counter = document.getElementById("slideCounter");
  var progressFill = document.getElementById("progressFill");
  var indexLabels = Array.prototype.slice.call(document.querySelectorAll(".slide-index b"));

  function render() {
    slides.forEach(function (slide, i) {
      slide.classList.toggle("is-active", i === current);
    });
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    counter.textContent = (current + 1) + " / " + total;
    progressFill.style.width = ((current + 1) / total * 100) + "%";
    indexLabels.forEach(function (el) { el.textContent = String(current + 1); });
  }

  function goTo(i) {
    if (i < 0 || i >= total) return;
    current = i;
    render();
  }

  prevBtn.addEventListener("click", function () { goTo(current - 1); });
  nextBtn.addEventListener("click", function () { goTo(current + 1); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); goTo(current + 1); }
    if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); goTo(current - 1); }
    if (e.key === "Home") { e.preventDefault(); goTo(0); }
    if (e.key === "End") { e.preventDefault(); goTo(total - 1); }
  });

  var touchStartX = null;
  document.addEventListener("touchstart", function (e) { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  document.addEventListener("touchend", function (e) {
    if (touchStartX === null) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 60) { goTo(current + (dx < 0 ? 1 : -1)); }
    touchStartX = null;
  }, { passive: true });

  render();
})();
