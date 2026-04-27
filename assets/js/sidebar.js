document.addEventListener("click", function (e) {
  const btn = e.target.closest("[data-sidebar-btn]");
  if (!btn) return;

  const sidebar = document.querySelector("[data-sidebar]");
  sidebar.classList.toggle("active");
});