The first thing did was to look at the design and try to think how i would structure my html.

- I will use flex-box for my styling. So I structured my html like this.

<div>Flecontainer
<section>content-wrap
  <img Hero img />
<section>container for thumbnail images
  <img thumb-img />
  <img thumb-img />
  <img thumb-img />
  <img thumb-img />
  <img thumb-img />
</section>
</section>
</div>

My plan is to switch the src and alt content of the images.

- In my index.js I imported my Hero-imag and the thumbnail box.

const images = document.querySelectorAll(".images-container img");
const heroImg = document.getElementById("hero-img");

- To access the thumbnail-images a used an forEach-loop.
- In the forEachloop i added an event listener of type click and event as an argument.
- I created two varibles to store the big image.

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

Now you can click on the thumbnail-images and it will go to the hero-image and the hero-image will go to the thumbnail.

- Styling

  I made the application responsive with media-queries.
  I used flex-box to style the image-gallery.

To run this application

Open in browser

- Download the zip-file
- Extrahera the zip-file
- Right-click on the index.html file and click on open with and click on google-chrome

Run in vs-code

- open vs-code
- Open the filen in vs-code
- Instal the Live server plugin
- Right-click when you are in index.html and choose open with Live server
- The file will open in the browser.
