// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function onLogin() {
    document.getElementById('credits').style.display = "block";
    document.getElementById('login').innerHTML = '<i class="fa-solid fa-user"></i> Profile';
    document.getElementById('login')
    modal.style.display = "none";
}