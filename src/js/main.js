let slideButtonsList = document.querySelectorAll("input[type=radio]");
let i = 0;

setInterval(() => {
    slideButtonsList[i].checked = true;
    i = (i + 1) % slideButtonsList.length;
}, 5000);
let menuButtonList = document.querySelectorAll(".mainButton");
let subMenuList = document.querySelectorAll(".subMenu");
let arrowList = document.querySelectorAll(".navigation-arrow");
var userAgent = navigator.userAgent;
if (userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
    console.log("mobile");
    menuButtonList.forEach((button, i) => {
        button.addEventListener("click", function() {
            if(subMenuList[i].style.display === "flex") {
                subMenuList[i].style.display = "none";
                arrowList[i].style.transform = "rotate(0deg)";
            } else {
                subMenuList[i].style.display = "flex";
                arrowList[i].style.transform = "rotate(180deg)";
            }
        })
    })
} else {
    console.log("PC");
    menuButtonList.forEach((button, i) => {
        button.onmouseover = function() {
            subMenuList[i].style.display = "flex";
            arrowList[i].style.transform = "rotate(180deg)";
        }
        button.onmouseout = function() {
            subMenuList[i].style.display = "none"
            arrowList[i].style.transform = "rotate(0deg)";
        }
    })
    subMenuList.forEach((layer, i) => {
        layer.onmouseover = function() {
            layer.style.display = "flex";
            arrowList[i].style.transform = "rotate(180deg)";
        }
        layer.onmouseout = function() {
            layer.style.display = "none";
            arrowList[i].style.transform = "rotate(0deg)";
        }
    })
}