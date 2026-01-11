const introVideo = document.getElementById("introVideo");
const bgVideo = document.getElementById("bgVideo");

if (introVideo) {
  introVideo.playbackRate = 0.75;

  introVideo.addEventListener("ended", () => {
    document.querySelector(".intro-video").style.display = "none";
    bgVideo.classList.remove("hidden");
  });
}
