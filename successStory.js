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


// Tell us your story.

function validate(val) {
  v1 = document.getElementById("fname");
  v2 = document.getElementById("lname");
  v3 = document.getElementById("email");
  v4 = document.getElementById("mob");
  v5 = document.getElementById("job");
  v6 = document.getElementById("ans");

  flag1 = true;
  flag2 = true;
  flag3 = true;
  flag4 = true;
  flag5 = true;
  flag6 = true;

  if(val>=1 || val==0) {
      if(v1.value == "") {
          v1.style.borderColor = "red";
          flag1 = false;
      }
      else {
          v1.style.borderColor = "green";
          flag1 = true;
      }
  }

  if(val>=2 || val==0) {
      if(v2.value == "") {
          v2.style.borderColor = "red";
          flag2 = false;
      }
      else {
          v2.style.borderColor = "green";
          flag2 = true;
      }
  }
  if(val>=3 || val==0) {
      if(v3.value == "") {
          v3.style.borderColor = "red";
          flag3 = false;
      }
      else {
          v3.style.borderColor = "green";
          flag3 = true;
      }
  }
  if(val>=4 || val==0) {
      if(v4.value == "") {
          v4.style.borderColor = "red";
          flag4 = false;
      }
      else {
          v4.style.borderColor = "green";
          flag4 = true;
      }
  }
  if(val>=5 || val==0) {
      if(v5.value == "") {
          v5.style.borderColor = "red";
          flag5 = false;
      }
      else {
          v5.style.borderColor = "green";
          flag5 = true;
      }
  }
  if(val>=6 || val==0) {
      if(v6.value == "") {
          v6.style.borderColor = "red";
          flag6 = false;
      }
      else {
          v6.style.borderColor = "green";
          flag6 = true;
      }
  }

  flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6;

  return flag;
}