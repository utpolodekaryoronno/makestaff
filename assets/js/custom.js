
// menu javascript
document.addEventListener('DOMContentLoaded', function() {
    var humberIcon = document.querySelector('.all-p-humber');
    var menu = document.querySelector('.menu ul');

    humberIcon.addEventListener('click', function() {
        this.classList.toggle('open');
        menu.classList.toggle('open');
        if (menu.style.maxHeight) {
            menu.style.maxHeight = null;
        } else {
            menu.style.maxHeight = menu.scrollHeight + "px";
        }
    });
});



// Modal

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
