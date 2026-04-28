// UNUSED FEATURE (Modal - Testimonials)
// Akan dipakai untuk future feature (popup project / preview) #about line 105

function initModal() {
  const items = document.querySelectorAll("[data-testimonials-item]");
  const modal = document.querySelector("[data-modal-container]");
  const closeBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  if (!modal) return;

  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  items.forEach(item => {
    item.addEventListener("click", () => {
      modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
      modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;

      modal.classList.add("active");
      overlay.classList.add("active");
    });
  });

  const close = () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  };

  closeBtn?.addEventListener("click", close);
  overlay?.addEventListener("click", close);
}