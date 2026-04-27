function initNavigation() {
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-nav-link]")) {

      const page = e.target.dataset.page;

      document.querySelectorAll("[data-nav-link]").forEach(btn =>
        btn.classList.remove("active")
      );

      e.target.classList.add("active");

      loadPage(page);
    }
  });
}