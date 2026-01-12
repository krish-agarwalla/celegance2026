/* =====================================================
   PAGE FADE-IN (SAFE)
===================================================== */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

/* =====================================================
   MOBILE MENU (SAFE ON ALL PAGES)
===================================================== */
const menuBtn = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("show");
  });
}

if (closeBtn && mobileMenu) {
  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
}

/* Close menu when clicking outside */
document.addEventListener("click", (e) => {
  if (!mobileMenu || !menuBtn) return;

  if (
    mobileMenu.classList.contains("show") &&
    !mobileMenu.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    mobileMenu.classList.remove("show");
  }
});

/* Close menu on link click */
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    if (mobileMenu) mobileMenu.classList.remove("show");
  });
});

/* =====================================================
   COUNTDOWN TIMER (SAFE)
   Target: 6 Feb 2026
===================================================== */
const festDate = new Date("Feb 6, 2026 00:00:00").getTime();

if (!isNaN(festDate)) {
  setInterval(() => {
    const now = new Date().getTime();
    const diff = festDate - now;

    if (diff < 0) return;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (hoursEl) hoursEl.innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
    if (minutesEl) minutesEl.innerText = Math.floor((diff / (1000 * 60)) % 60);
    if (secondsEl) secondsEl.innerText = Math.floor((diff / 1000) % 60);
  }, 1000);
}

/* =====================================================
   CONTACT FORM (AJAX + TOAST + REDIRECT AFTER 8s)
===================================================== */
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");

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
        if (toast) toast.classList.add("show");

        setTimeout(() => {
          if (toast) toast.classList.remove("show");
          window.location.href = "contact.html";
        }, 8000);

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
