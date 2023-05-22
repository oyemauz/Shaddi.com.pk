let images = document.querySelector(".images");
let prev_btn = document.getElementById("prev-btn");
let next_btn = document.getElementById("next-btn");

images.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  images.scrollLeft += evt.deltaY;
  images.style.scrollBehavior = "auto";
});

next_btn.addEventListener("click", () => {
  images.style.scrollBehavior = "smooth";
  images.scrollLeft += 1000;
});

prev_btn.addEventListener("click", () => {
  images.style.scrollBehavior = "smooth";
  images.scrollLeft -= 1000;
});
