// get the first button
const myButton = document.getElementById("btn");
// get the secret paragraph
const mySecret = document.getElementById("secret");
// get the don't click me button
const myDontClickMeButton = document.getElementById("dontclickme");

myButton.addEventListener("click", () => {
  mySecret.style.display = "block";
});

myDontClickMeButton.addEventListener("click", () => {
  alert("Told ya not to do so, bad boy!!!");
});
