let slideButtonsList = document.querySelectorAll("input[type=radio]");
let i = 0;

setInterval(() => {
    slideButtonsList[i].checked = true;
    i = (i + 1) % slideButtonsList.length;
}, 5000);
