/* ================= MOBILE MENU ================= */
const menuBtn = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });
}

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});

/* ================= TOAST ================= */
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 8000);
}

/* ================= CONTACT FORM (AJAX SUBMIT) ================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // ❌ STOP PAGE REDIRECT

    const formData = new FormData(contactForm);

    fetch("https://formsubmit.co/ajax/celegance2026@gmail.com", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        showToast();
        contactForm.reset(); // clear form
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(() => {
      alert("Network error. Please try again.");
    });
  });
}
