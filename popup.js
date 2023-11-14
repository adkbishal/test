// Get the modal and overlay elements
var modal = document.getElementById("myModal");
var modalOverlay = document.getElementById("modalOverlay");

// Get the button that opens the modal
var openModalButton = document.getElementById("openModal");

// Get the <span> element that closes the modal
var closeModal = document.getElementById("closeModal");

// When the user clicks the button, open the modal
openModalButton.addEventListener("click", function() {
    modal.style.display = "block";
    modalOverlay.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
modalOverlay.addEventListener("click", function() {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
});