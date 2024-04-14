// Login portal

const login = document.querySelector(".loginBtn");
const signup = document.querySelector(".signupBtn");

login.addEventListener("click", () => {
  document.querySelector(".login").classList.remove("hide");
  document.querySelector(".signup").classList.add("hide");
});

signup.addEventListener("click", () => {
  document.querySelector(".login").classList.add("hide");
  document.querySelector(".signup").classList.remove("hide");
});
