function initForm() {
  const form = document.querySelector("[data-form]");
  const inputs = document.querySelectorAll("[data-form-input]");
  const btn = document.querySelector("[data-form-btn]");

  if (!form) return;

  inputs.forEach(input => {
    input.addEventListener("input", () => {
      if (form.checkValidity()) {
        btn.removeAttribute("disabled");
      } else {
        btn.setAttribute("disabled", "");
      }
    });
  });
}