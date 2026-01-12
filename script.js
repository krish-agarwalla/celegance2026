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
    window.location.href = "contact.html"; // redirect after 8s
  }, 8000);
}

/* ================= FORM SUBMIT (CONTROLLED) ================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop default redirect

    const formData = new FormData(contactForm);

    fetch("https://formsubmit.co/ajax/celegance2026@gmail.com", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        showToast();
        contactForm.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(() => {
      alert("Network error. Please try again.");
    });
  });
}
