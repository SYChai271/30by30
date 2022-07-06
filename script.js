// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function onLogin() {
  if (window.location.pathname == "/e-mart.html") {
    document.getElementById("credits").style.display = "block";
  } else if (window.location.pathname == "/index.html") {
    document.getElementById("about").style.display = "block";
  }
  document.getElementById("login").style.display = "none";
  document.getElementById("profile").style.display = "block";
  modal.style.display = "none";
}

document.getElementById("login").onclick = function () {
  modal.style.display = "block";
};
