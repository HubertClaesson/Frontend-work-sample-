const images = document.querySelectorAll(".images-container img");
const heroImg = document.getElementById("hero-img");

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    const clickedImg = event.target;
    const storedSrc = heroImg.src;
    const storedAlt = heroImg.alt;

    heroImg.src = clickedImg.src;
    heroImg.alt = clickedImg.alt;

    clickedImg.src = storedSrc;
    clickedImg.alt = storedAlt;
  });
});
