let count = 1;
document.getElementById("index-slide-input1").checked = true;

setInterval(function() {
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if(count > 4) {
        count = 1;
    }
    document.getElementById("index-slide-input" + count).checked = true;
}