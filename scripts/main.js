// Entry point for page behaviour. Loaded as an ES module (deferred by default).

const yearEl = document.querySelector("[data-current-year]");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
