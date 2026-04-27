const routes = {
  "#/": "./pages/about.html",
  "#/resume": "./pages/resume.html",
  "#/portfolio": "./pages/portfolio.html",
  "#/blog": "./pages/blog.html",
  "#/contact": "./pages/contact.html",
};

let app;

// 🔥 LOAD PAGE
async function loadPage(path) {
  const route = routes[path] || "./pages/404.html";

  try {
    const res = await fetch(route);
    const html = await res.text();

    app.innerHTML = html;

    setActiveLink(path);

    // 🔥 PENTING BANGET (ini yang bikin resume lu tadi “kayak gak muncul”)
    reInitScripts();

  } catch (err) {
    console.error(err);
    app.innerHTML = "<h1 style='color:white'>Error</h1>";
  }
}

// 🔥 RE-INIT semua JS setelah inject HTML
function reInitScripts() {
  if (typeof initSidebar === "function") initSidebar();
  if (typeof initModal === "function") initModal();
  if (typeof initFilter === "function") initFilter();
  if (typeof initForm === "function") initForm();
}

// 🔥 LOAD NAVBAR
async function loadNavbar() {
  const res = await fetch("./components/navbar.html");
  const html = await res.text();
  document.getElementById("navbar").innerHTML = html;
}

// 🔥 LOAD SIDEBAR
async function loadSidebar() {
  const res = await fetch("./components/sidebar.html");
  const html = await res.text();
  document.getElementById("sidebar").innerHTML = html;
}

// 🔥 CLICK ROUTING
document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-route]");
  if (!link) return;

  e.preventDefault();

  location.hash = "#" + link.dataset.route;
});

// 🔥 HASH CHANGE
window.addEventListener("hashchange", () => {
  loadPage(location.hash || "#/");
});

// 🔥 ACTIVE NAV
function setActiveLink(path) {
  const clean = path.replace("#", "");

  document.querySelectorAll("[data-route]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.route === clean);
  });
}

// 🔥 INIT
window.addEventListener("DOMContentLoaded", async () => {
  app = document.getElementById("content");

  await loadSidebar();
  await loadNavbar();

  if (!location.hash) {
    location.hash = "#/";
  }

  loadPage(location.hash);
});