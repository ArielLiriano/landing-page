function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}

function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var navegacion = document.querySelector(".navegacion");
  menuToggle.classList.toggle("active");
  navegacion.classList.toggle("active");
}
