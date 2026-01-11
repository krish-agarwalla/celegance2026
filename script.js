const introVideo = document.getElementById("introVideo");
const bgDesktop = document.getElementById("bgDesktop");
const bgMobile = document.getElementById("bgMobile");
const skipBtn = document.getElementById("skipIntro");

if (introVideo) {
  introVideo.playbackRate = 0.75;

  function showMain() {
    document.querySelector(".intro-video").style.display = "none";
    bgDesktop.classList.remove("hidden");
    bgMobile.classList.remove("hidden");
  }

  introVideo.addEventListener("ended", showMain);

  if (skipBtn) {
    skipBtn.addEventListener("click", showMain);
  }
}
