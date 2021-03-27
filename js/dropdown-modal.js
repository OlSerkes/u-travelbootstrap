const close = document.querySelector("#menuModal");

//Get the button that opens the modal
const btn = document.querySelector("#burger-checkbox");

//Get the button that close the modal
const btn = document.querySelector(".closebutton")


//open the modal
btn.onclick = function() {
    modalourtours.style.display = "block";
}

//close modal with button
btn.onclick = function() {
    modalourtours.style.display ="none";
}

//close modal
Window.onclick = function(event) {
    if (event.target == modal) {
        modalourtours.style.display = "none";
    }
}