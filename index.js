function toggle() {
  var x = document.getElementById("footer");
  var y = document.getElementById("toggleArrow");
  var z = document.getElementById("doubletap");
  if (x.style.display === "none") {
    x.style.display = "grid";
    x.style.transitionDuration = "1s";
    y.style.transform = "translateY(-110px) rotate(45deg) scale(1.2)";
    y.style.transitionDuration = "0.3s";
  } else {
    x.style.display = "none";
    y.style.transform = "rotate(-135deg)";
    z.style.display = "none";
  }
}