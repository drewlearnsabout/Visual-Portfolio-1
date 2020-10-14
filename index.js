function toggle() {
  var x = document.getElementById("footer");
  var y = document.getElementById("toggleArrow");
  if (x.style.display === "none") {
    x.style.display = "grid";
    x.style.transitionDuration = "1s";
    y.style.transform = "translateY(-70px) rotate(45deg) scale(1.2)";
    y.style.transitionDuration = "0.3s";
  } else {
    x.style.display = "none";
    y.style.transform = "rotate(-135deg)";
  }
}

var modal = document.getElementById("instagramVideo");
var btn = document.getElementById("brandingVideoButton");
btn.onclick = function() {
  modal.style.display = "grid";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}