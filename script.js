// Get the modal
var modal = document.getElementById("id01");
var allLoginsByClass = document.getElementsByClassName("login");
var allProfilesByClass = document.getElementsByClassName("profile");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  for (var i of allLoginsByClass) {
    if (event.target == i) {
      modal.style.display = "block";
    }
  }
};

function onLogin() {
  if (window.location.pathname == "/e-mart.html") {
    document.getElementById("credits").style.display = "block";
  } else if (window.location.pathname == "/index.html") {
    document.getElementById("about").style.display = "block";
  }
  for (var i of allLoginsByClass) {
    i.style.display = "none";
  }
  for (var i of allProfilesByClass) {
    i.style.display = "block";
  }
  modal.style.display = "none";
}
