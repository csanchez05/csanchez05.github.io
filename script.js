const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxEyebrow = document.querySelector("#lightbox-eyebrow");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxNote = document.querySelector("#lightbox-note");
const lightboxClose = document.querySelector("#lightbox-close");

function closeLightbox() {
  lightbox.hidden = true;
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("[data-lightbox]").forEach((button) => {
  button.addEventListener("click", () => {
    const preview = button.querySelector("img");
    lightboxImage.src = button.dataset.src;
    lightboxImage.alt = preview ? preview.alt : button.dataset.title;
    lightboxEyebrow.textContent = button.dataset.eyebrow;
    lightboxTitle.textContent = button.dataset.title;
    lightboxNote.textContent = button.dataset.note;
    lightbox.hidden = false;
    document.body.classList.add("modal-open");
    lightboxClose.focus();
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
});

const headshot = document.querySelector("#headshot");
const portrait = document.querySelector("#portrait");
const portraitFallback = document.querySelector("#portrait-fallback");
function showPortraitFallback() {
  portrait.classList.add("portrait-fallback");
  portraitFallback.hidden = false;
}
headshot.addEventListener("error", showPortraitFallback);
if (headshot.complete && headshot.naturalWidth === 0) showPortraitFallback();

document.querySelectorAll(".art-slot img").forEach((image) => {
  const showArtwork = () => {
    image.closest(".art-slot").classList.add("has-art");
    image.nextElementSibling.hidden = true;
  };
  image.addEventListener("load", showArtwork);
  if (image.complete && image.naturalWidth > 0) showArtwork();
});
