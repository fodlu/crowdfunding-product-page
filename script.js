//declare
const bookmark = document.querySelector(".bookmark");
const thanks = document.querySelector(".thanks");
const got = document.querySelector(".got");
const ham = document.querySelector(".ham");
const nav = document.querySelector("nav");
const link = nav.querySelectorAll("a");
let bookmarkText = bookmark.querySelector("a");
const backThisProject = document.querySelector(".back");
const overlay = document.querySelector(".overlay");
const overlay2 = document.querySelector(".overlay2");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const closeModal = document.querySelector(".closeModal");
const radio = modal.querySelectorAll(".radio");
const option = modal.querySelectorAll(".option");
const amount = document.querySelectorAll(".amount");
const cont = document.querySelectorAll(".continue");

//function
const toggle = () => {
  overlay.classList.toggle("active");
  modal.classList.toggle("active");
  close.classList.toggle("active");
  closeModal.classList.toggle("active");
  nav.classList.remove("active");
};

const navToggle = () => {
  nav.classList.toggle("active");
  overlay2.classList.toggle("active");
  ham.classList.toggle("hidden");
  close.classList.toggle("hidden");
};

//action
bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("active");

  if (bookmarkText.textContent === "Bookmark") {
    bookmarkText.textContent = "Bookmarked";
  } else {
    bookmarkText.textContent = "Bookmark";
  }
});

backThisProject.addEventListener("click", toggle);
overlay.addEventListener("click", () => {
  toggle();
  modal.classList.remove("active");
  ham.classList.toggle("hidden");
  close.classList.toggle("hidden");
});

closeModal.addEventListener("click", toggle);

radio.forEach((radios, index) => {
  radios.addEventListener("click", () => {
    amount.forEach((amounts) => amounts.classList.remove("active"));
    amount[index - 1].classList.toggle("active");
  });
});

cont.forEach((conts) => {
  conts.addEventListener("click", () => {
    overlay2.classList.toggle("active");
    thanks.classList.toggle("active");
  });
});

got.addEventListener("click", () => {
  toggle();
  thanks.classList.remove("active");
  overlay2.classList.remove("active");
});

ham.addEventListener("click", () => {
  navToggle();
  overlay.classList.add("active");
});

close.addEventListener("click", () => {
  navToggle();
  overlay.classList.remove("active");
});

link.forEach((links) => {
  links.addEventListener("click", () => {
    overlay2.classList.remove("active");
    overlay.classList.remove("active");
    nav.classList.remove("active");
    ham.classList.toggle("hidden");
    close.classList.toggle("hidden");
    modal.classList.remove("active");
  });
});

overlay2.addEventListener("click", () => {
  toggle();
  thanks.classList.remove("active");
  overlay.classList.toggle("active");
});
