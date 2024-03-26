const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content4 = document.getElementById("content4");
const content5 = document.getElementById("content5");
const milktoggleLink = document.getElementById("btnmilk");
const fruittoggleLink = document.getElementById("btnfruit");
const snacktoggleLink = document.getElementById("btnsnacks");
const discounttoggleLink = document.getElementById("btndis");
const coffeetoggleLink = document.getElementById("btncoffee");
const content1next = document.getElementById("next1");
const content2next = document.getElementById("next2");
const content3next = document.getElementById("next3");
const content4next = document.getElementById("next4");
const content5next = document.getElementById("next5");
const content1prev = document.getElementById("prev1");
const content2prev = document.getElementById("prev2");
const content3prev = document.getElementById("prev3");
const content4prev = document.getElementById("prev4");
const content5prev = document.getElementById("prev5");


milktoggleLink.addEventListener("click", function(event) {
    event.preventDefault();
  content1.style.display = "none";
  content2.style.display = "block";
  content3.style.display = "none";
  content4.style.display = "none";
  content5.style.display = "none";
});
content1next.addEventListener("click", function(event) {
  event.preventDefault();
content1.style.display = "none";
content2.style.display = "block";
content3.style.display = "none";
content4.style.display = "none";
content5.style.display = "none";
});
content1prev.addEventListener("click", function(event) {
  event.preventDefault();
content1.style.display = "block";
content2.style.display = "none";
content3.style.display = "none";
content4.style.display = "none";
content5.style.display = "none";
});

fruittoggleLink.addEventListener("click", function(event) {
    event.preventDefault();
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "block";
  content4.style.display = "none";
  content5.style.display = "none";
});
content2next.addEventListener("click", function(event) {
  event.preventDefault();
content1.style.display = "none";
content2.style.display = "none";
content3.style.display = "block";
content4.style.display = "none";
content5.style.display = "none";
});
content2prev.addEventListener("click", function(event) {
  event.preventDefault();
content1.style.display = "none";
content2.style.display = "block";
content3.style.display = "none";
content4.style.display = "none";
content5.style.display = "none";
});

snacktoggleLink.addEventListener("click", function(event) {
    event.preventDefault();
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "block";
  content5.style.display = "none";
});
content3next.addEventListener("click", function(event) {
  event.preventDefault();
content1.style.display = "none";
content2.style.display = "none";
content3.style.display = "none";
content4.style.display = "block";
content5.style.display = "none";
});
content3prev.addEventListener("click", function(event) {
  event.preventDefault();
content1.style.display = "none";
content2.style.display = "none";
content3.style.display = "block";
content4.style.display = "none";
content5.style.display = "none";
});

discounttoggleLink.addEventListener("click", function(event) {
    event.preventDefault();
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "none";
  content5.style.display = "block";
});
content4next.addEventListener("click", function(event) {
  event.preventDefault();
content1.style.display = "none";
content2.style.display = "none";
content3.style.display = "none";
content4.style.display = "none";
content5.style.display = "block";
});
content4prev.addEventListener("click", function(event) {
  event.preventDefault();
content1.style.display = "none";
content2.style.display = "none";
content3.style.display = "none";
content4.style.display = "block";
content5.style.display = "none";
});

content5next.addEventListener("click", function(event) {
  event.preventDefault();
content1.style.display = "block";
content2.style.display = "none";
content3.style.display = "none";
content4.style.display = "none";
content5.style.display = "none";
});
content5prev.addEventListener("click", function(event) {
  event.preventDefault();
content1.style.display = "none";
content2.style.display = "none";
content3.style.display = "none";
content4.style.display = "none";
content5.style.display = "block";
});

// coffeetoggleLink.addEventListener("click", function(event) {
//     event.preventDefault();
//   content1.style.display = "block";
//   content2.style.display = "none";
//   content3.style.display = "none";
//   content4.style.display = "none";
//   content5.style.display = "none";
// });


// ------------------------------------------------------------------------------------------------------------



