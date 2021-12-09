let elForm = document.querySelector('.js-form');
let elInputName = document.querySelector('.js-input-name');
let elInputEmail = document.querySelector('.js-input-email');
let elInputText = document.querySelector('.js-input-text');
let elButton = document.querySelector('.js-button');

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    elButton.onclick = function () {
        console.log(document.querySelector('.js-input-name').value.trim());
        console.log(document.querySelector('.js-input-email').value.trim());
        console.log(document.querySelector('.js-input-text').value.trim());
    }

});

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}