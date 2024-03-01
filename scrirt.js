const input = document.querySelector("#burger");
const buttonMenu=document.querySelector(".burger");
const buttonClose = document.querySelector(".btn-close");
input.addEventListener("click",changeButton);
function changeButton() {
    if (input.checked === true) {
        buttonClose.style.display= "block";
        buttonMenu.style.display= "none";
    }
    else {
        buttonMenu.style.display= "block";
        buttonClose.style.display= "none";
    }
}