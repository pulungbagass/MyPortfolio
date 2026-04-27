async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

async function loadPage(page) {
  const res = await fetch(`./pages/${page}.html`);
  const html = await res.text();
  console.log("LOAD PAGE:", page);
  document.getElementById("content").innerHTML = html;

  initPage(); // 🔥 penting
}   

async function init() {
  
  await loadComponent("sidebar", "./components/sidebar.html");
  await loadComponent("navbar", "./components/navbar.html");

  initSidebar();
  initNavigation();

  loadPage("about");
}

init();