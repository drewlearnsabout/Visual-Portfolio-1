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

document.body.classList.add('js-loading');
window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('js-loading');
}

document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 
      document.querySelector("body").style.visibility = "hidden"; 
      document.querySelector("#loader").style.visibility = "visible"; 
  } else { 
      document.querySelector("#loader").style.display = "none"; 
      document.querySelector("body").style.visibility = "visible"; 
  } 
}; 