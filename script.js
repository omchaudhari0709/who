var heart = document.getElementById("heart");
var liked = false;

heart.addEventListener("click", function () {
    if (!liked) {
        heart.style.color = "red";
        liked = true;
    } else {
        heart.style.color = "white";
        liked = false;
    }
});



var img = document.querySelector("img");
img.addEventListener("dblclick", function () {
    if (!liked) {
        heart.style.color = "red";
        liked = true;
    } else {
        heart.style.color = "white";
        liked = false;
    }
});
