let primaryMenuButton = document.querySelectorAll(".primary-menu-button");
let secundaryMenu = document.querySelectorAll(".subMenu");
let menuButtonArrow = document.querySelectorAll(".menu-arrow");
for (let i = 0; i < secundaryMenu.length; i++) {
    secundaryMenu[i].style.display = "none";
}
console.log(secundaryMenu);
//If device's width are above 700px, the device will be caracterized as a PC, else Mobile.
if (window.innerWidth > 700) {
    primaryMenuButton.forEach((button, i) => {
        button.onmouseover = function() {
            secundaryMenu[i].style.display = "flex";
            menuButtonArrow[i].style.transform = "rotate(180deg)";
        }
        button.onmouseout = function() {
            secundaryMenu[i].style.display = "none"
            menuButtonArrow[i].style.transform = "rotate(0deg)";
        }
    })
    secundaryMenu.forEach((layer, i) => {
        layer.onmouseover = function() {
            layer.style.display = "flex";
            menuButtonArrow[i].style.transform = "rotate(180deg)";
        }
        layer.onmouseout = function() {
            layer.style.display = "none";
            menuButtonArrow[i].style.transform = "rotate(0deg)";
        }
    })
} else {
    let openMenu = -1;
    primaryMenuButton.forEach((button, i) => {
        button.onclick = function() {
            // Verificar se o índice do botão é diferente do índice do menu que está aberto
            if (i !== openMenu) {
            // Fechar o menu que está aberto, se houver
            if (openMenu !== -1) {
                secundaryMenu[openMenu].style.display = "none";
                menuButtonArrow[openMenu].style.transform = "rotate(0deg)";
            }
                // Abrir o novo menu
                secundaryMenu[i].style.display = "flex";
                menuButtonArrow[i].style.transform = "rotate(180deg)";
                // Atualizar o índice do menu que está aberto
                openMenu = i;
            } else {
                // Fechar o menu que está aberto
                secundaryMenu[i].style.display = "none";
                menuButtonArrow[i].style.transform = "rotate(0deg)";
                // Resetar o índice do menu que está aberto
                openMenu = -1;
            }
        }
    })
}