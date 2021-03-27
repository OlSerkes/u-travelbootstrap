//Get the modal
const modal = document.querySelector("myModal");

//Get the button that opens the modal
const btn = document.querySelector("myBtn");


//open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

//close modal
Window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}