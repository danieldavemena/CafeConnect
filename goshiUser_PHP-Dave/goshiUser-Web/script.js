// Check if user is logged in

// const userID = sessionStorage.getItem("userID");

// window.onload = () => {
//   if (userID == undefined) {
//     document
//       .querySelector(".menuPage")
//       .parentNode.removeChild(document.querySelector(".menuPage"));
//     document
//       .querySelector(".cartPage")
//       .parentNode.removeChild(document.querySelector(".cartPage"));
//     document
//       .querySelector(".menuBtn")
//       .parentNode.removeChild(document.querySelector(".menuBtn"));
//     document
//       .querySelector(".cartBtn")
//       .parentNode.removeChild(document.querySelector(".cartBtn"));
//     document
//       .querySelector(".profileBtn")
//       .parentNode.removeChild(document.querySelector(".profileBtn"));
//   } else {
//     document
//       .querySelector(".loginBtn")
//       .parentNode.removeChild(document.querySelector(".loginBtn"));
//   }
// };

// Menus Const

const espressoMenu = document.querySelector(".espressoBased");
const iceBlendedMenu = document.querySelector(".iceBlended");
const nonCoffeeMenu = document.querySelector(".nonCoffee");
const originalMilkteaMenu = document.querySelector(".originalMilktea");
const specialtiesMenu = document.querySelector(".specialties");

// Arrow Functions

const espresso = document.querySelector(".espressoBasedOption");
const iceBlended = document.querySelector(".iceBlendedOption");
const nonCoffee = document.querySelector(".nonCoffeeOption");
const milktea = document.querySelector(".originalMilkteaOption");
const specialties = document.querySelector(".specialtiesOption");

espresso.addEventListener("click", () => {
  espressoMenu.classList.remove("hide");
  iceBlendedMenu.classList.add("hide");
  nonCoffeeMenu.classList.add("hide");
  originalMilkteaMenu.classList.add("hide");
  specialtiesMenu.classList.add("hide");
});

iceBlended.addEventListener("click", () => {
  espressoMenu.classList.add("hide");
  iceBlendedMenu.classList.remove("hide");
  nonCoffeeMenu.classList.add("hide");
  originalMilkteaMenu.classList.add("hide");
  specialtiesMenu.classList.add("hide");
});

nonCoffee.addEventListener("click", () => {
  espressoMenu.classList.add("hide");
  iceBlendedMenu.classList.add("hide");
  nonCoffeeMenu.classList.remove("hide");
  originalMilkteaMenu.classList.add("hide");
  specialtiesMenu.classList.add("hide");
});

milktea.addEventListener("click", () => {
  espressoMenu.classList.add("hide");
  iceBlendedMenu.classList.add("hide");
  nonCoffeeMenu.classList.add("hide");
  originalMilkteaMenu.classList.remove("hide");
  specialtiesMenu.classList.add("hide");
});

specialties.addEventListener("click", () => {
  espressoMenu.classList.add("hide");
  iceBlendedMenu.classList.add("hide");
  nonCoffeeMenu.classList.add("hide");
  originalMilkteaMenu.classList.add("hide");
  specialtiesMenu.classList.remove("hide");
});
// Sidebar Functions

// Top Bar Function

const home = document.querySelector(".homeBtn");
const menu = document.querySelector(".menuBtn");
const cart = document.querySelector(".cartBtn");
const signup = document.querySelector(".loginBtn");
const profile = document.querySelector(".profileBtn");

home.addEventListener("click", () => {
  document.querySelector(".homePage").classList.remove("hide");
  document.querySelector(".cartPage").classList.add("hide");
  document.querySelector(".menuPage").classList.add("hide");
  document.querySelector(".profile").classList.add("hide");

  home.classList.add("borderBottom");
  cart.classList.remove("borderBottom");
  menu.classList.remove("borderBottom");
});

menu.addEventListener("click", () => {
  document.querySelector(".menuPage").classList.remove("hide");
  document.querySelector(".cartPage").classList.add("hide");
  document.querySelector(".homePage").classList.add("hide");
  document.querySelector(".profile").classList.add("hide");

  home.classList.remove("borderBottom");
  cart.classList.remove("borderBottom");
  menu.classList.add("borderBottom");
});

cart.addEventListener("click", () => {
  document.querySelector(".cartPage").classList.remove("hide");
  document.querySelector(".homePage").classList.add("hide");
  document.querySelector(".menuPage").classList.add("hide");
  document.querySelector(".profile").classList.add("hide");

  home.classList.remove("borderBottom");
  cart.classList.add("borderBottom");
  menu.classList.remove("borderBottom");
});

profile.addEventListener("click", () => {
  document.querySelector(".cartPage").classList.add("hide");
  document.querySelector(".homePage").classList.add("hide");
  document.querySelector(".menuPage").classList.add("hide");
  document.querySelector(".profile").classList.remove("hide");

  home.classList.remove("borderBottom");
  cart.classList.remove("borderBottom");
  menu.classList.remove("borderBottom");
});

signup.addEventListener("click", () => {
  window.location.href = "portal.php";
});

// Cart Sidebar Functions

const cartList = document.querySelector(".cartList");
const toReceive = document.querySelector(".toReceive");
const completed = document.querySelector(".completed");

cartList.addEventListener("click", () => {
  document.querySelector(".carts").classList.remove("hide");
  document.querySelector(".receive").classList.add("hide");
  document.querySelector(".completedOrders").classList.add("hide");
});

toReceive.addEventListener("click", () => {
  document.querySelector(".carts").classList.add("hide");
  document.querySelector(".receive").classList.remove("hide");
  document.querySelector(".completedOrders").classList.add("hide");
});

completed.addEventListener("click", () => {
  document.querySelector(".carts").classList.add("hide");
  document.querySelector(".receive").classList.add("hide");
  document.querySelector(".completedOrders").classList.remove("hide");
});

// Order Now button

document.querySelectorAll(".homepageButton").forEach((homepageButton) => {
  if (userID == undefined) {
    homepageButton.addEventListener("click", () => {
      window.location.href = "portal.php";
    });
  } else {
    homepageButton.addEventListener("click", () => {
      document.querySelector(".menuPage").classList.remove("hide");
      document.querySelector(".cartPage").classList.add("hide");
      document.querySelector(".homePage").classList.add("hide");
    });
  }
});
