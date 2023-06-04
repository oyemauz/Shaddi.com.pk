// Push Values in options.

let opt1 = document.getElementsByClassName("age-select-info");

var length = 71;
const arr = Array.from({ length }, (_, i) => i + 1);

let value1, value2;
for (let j = 18; j <= arr.length; j++) {
  value1 = document.createElement("option");
  value1.innerHTML = j;
  value1.value = j;
  value2 = document.createElement("option");
  value2.innerHTML = j;
  value2.value = j;

  opt1[0].appendChild(value1);
  opt1[1].appendChild(value2);
}

// Scroll Bar

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
  if ((width = 1000)) images.scrollLeft += 1000;
  if ((width = 424)) images.scrollLeft += 424;
});

prev_btn.addEventListener("click", () => {
  images.style.scrollBehavior = "smooth";
  images.scrollLeft -= 1000;
});

// display help Page

const helpPage = document.querySelector(".c-content");
const displayhelp = document.querySelector(".click-help");
const h_p = window.getComputedStyle(helpPage);

displayhelp.addEventListener("click", () => {
  if (h_p.display === "none") helpPage.style.display = "block";
  else helpPage.style.display = "none";
});

// Signup Information.

const containr = document.querySelector(".Container");
const lg_section = document.querySelector(".Login-section");
const close_outline = document.querySelector(".close-outline");
const login = document.querySelector(".login");

const const_lg_section = window.getComputedStyle(lg_section);

login.addEventListener("click", () => {
  if (const_lg_section.display === "none") {
    lg_section.style.display = "block";
    containr.style.backgroundColor = "rgba(114, 114, 125, 0.2)";
  } else close_outline.addEventListener("click", outlinedisp);
});

function outlinedisp() {
  lg_section.style.display = "none";
  containr.style.backgroundColor = "rgba(114, 114, 125, 0)";
  console.log(lg_section.style.display);
}

// *********************** //
// ****** Succes Story *** //
// *********************** //

// let common_disp = window.getComputedStyle(helpPage);

let nav = document.querySelector(".naav");

// let link1 = document.querySelector(".naav-l-1");
let link2 = document.querySelector("#naav-l-2");
let link3 = document.querySelector("#naav-l-3");
let link4 = document.querySelector("#naav-l-4");
let link5 = document.querySelector("#naav-l-5");

console.log(link2);

let inside_research = document.querySelector(".inside-research");
let matches_research = document.querySelector(".matches-research");
let inbox_research = document.querySelector(".inbox-research");
let more_research = document.querySelector(".More-research");

link2.addEventListener("click", () => {
  inside_research.style.display = "block";
});
