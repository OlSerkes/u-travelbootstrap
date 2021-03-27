const close = document.querySelector("#closebtnmodalmenu");
const open = document.querySelector("#burger-checkbox");
const modal = document.querySelector("#menumodal")
const menu = doc.querySelector(".modal-content-menu-ourtours")


//open the modal
open.addEventListener('click', () => modal.classList.add('show-modal'));
//btn.onclick = function() {
   // modalourtours.style.display = "block";
//}
// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal after click-menu
menu.addEventListener('click',() =>  modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);

//close modal with button
//btn.onclick = function() {
   // modalourtours.style.display ="none";
//}

//close modal
//Window.onclick = function(event) {
   // if (event.target == modal) {
       // modalourtours.style.display = "none";
   // }
//}