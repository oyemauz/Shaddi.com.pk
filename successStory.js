// *********************** //
// ****** Succes Story *** //
// *********************** //

// let common_disp = window.getComputedStyle(helpPage);

let nav = document.querySelector(".naav");

// let link1 = document.querySelector(".naav-l-1");
let link2 = document.getElementById("naav-l-2");
let link3 = document.querySelector("#naav-l-3");
let link4 = document.querySelector("#naav-l-4");
let link5 = document.querySelector("#naav-l-5");

let inside_research = document.querySelector(".inside-research");
let matches_research = document.querySelector(".matches-research");
let inbox_research = document.querySelector(".inbox-research");
let more_research = document.querySelector(".More-research");

// console.log(link2);

link2.addEventListener("mouseover", () => {
  inside_research.style.display = "block";
});

link2.addEventListener("mouseout", () => {
  inside_research.style.display = "none";
});

link3.addEventListener("mouseover", () => {
  matches_research.style.display = "block";
});

link3.addEventListener("mouseout", () => {
  matches_research.style.display = "none";
});

link4.addEventListener("mouseover", () => {
  inbox_research.style.display = "block";
});

link4.addEventListener("mouseout", () => {
  inbox_research.style.display = "none";
});

link5.addEventListener("mouseover", () => {
  more_research.style.display = "block";
});

link5.addEventListener("mouseout", () => {
  more_research.style.display = "none";
});
