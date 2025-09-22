// Activate project modal with dynamic content
const projectModal = document.getElementById("projectModal");
if (projectModal) {
  projectModal.addEventListener("show.bs.modal", (event) => {
    const btn = event.relatedTarget;
    const title = btn.getAttribute("data-title");
    const img = btn.getAttribute("data-img");
    const desc = btn.getAttribute("data-desc");

    const modalTitle = projectModal.querySelector(".modal-title");
    const modalImg = projectModal.querySelector("#projectModalImg");
    const modalDesc = projectModal.querySelector("#projectModalDesc");

    modalTitle.textContent = title || "Project";
    modalImg.src = img || "";
    modalImg.alt = title || "Project image";
    modalDesc.textContent = desc || "";
  });
}

// Simple scrollspy-like active link (update active nav on scroll)
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".navbar .nav-link");

function setActiveNav() {
  let index = sections.length;
  while (--index && window.scrollY + 120 < sections[index].offsetTop) {}
  navLinks.forEach((link) => link.classList.remove("active"));
  const id = sections[index].id;
  const activeLink = document.querySelector(`.navbar .nav-link[href="#${id}"]`);
  if (activeLink) activeLink.classList.add("active");
}
setActiveNav();
window.addEventListener("scroll", setActiveNav);

// Contact form validation (Bootstrap)
(() => {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener(
    "submit",
    function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault();
        // di sini: implementasi kirim via API / email service jika ada
        const btn = form.querySelector('button[type="submit"]');
        btn.textContent = "Terkirim ✓";
        setTimeout(() => {
          const modal = bootstrap.Modal.getInstance(
            document.getElementById("contactModal")
          );
          modal.hide();
          form.reset();
          btn.textContent = "Kirim";
        }, 900);
      }
      form.classList.add("was-validated");
    },
    false
  );
})();
