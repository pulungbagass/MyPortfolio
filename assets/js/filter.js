function initFilter() {
  const filterBtns = document.querySelectorAll("[data-filter-btn]");
  const items = document.querySelectorAll("[data-filter-item]");
  const select = document.querySelector("[data-select]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const selectItems = document.querySelectorAll("[data-select-item]");

  if (!items.length) return;

  const filterFunc = (value) => {
    items.forEach(item => {
      if (value === "all" || value === item.dataset.category) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.innerText.toLowerCase();
      filterFunc(val);

      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  select?.addEventListener("click", () => {
    select.classList.toggle("active");
  });

  selectItems.forEach(item => {
    item.addEventListener("click", () => {
      const val = item.innerText.toLowerCase();
      selectValue.innerText = item.innerText;
      filterFunc(val);
      select.classList.remove("active");
    });
  });
}