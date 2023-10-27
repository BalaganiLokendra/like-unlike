let puppyLikeButtonElement = document.getElementById("puppyImage");
let likeIconElement = document.getElementById("likeIcon");
let likeButtonElement = document.getElementById("likeButton");
let isImageliked = false;


function onClickLikeButton() {
    if (isImageliked === false) {
        puppyLikeButtonElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIconElement.style.color = "#0967d2";
        likeButtonElement.style.backgroundColor = "#0967d2";
        likeButtonElement.style.color = "#ffffff";
        isImageliked = true;
    } else {
        puppyLikeButtonElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIconElement.style.color = "#cbd2d9";
        likeButtonElement.style.backgroundColor = "#cbd2d9";
        likeButtonElement.style.color = "#cbd2d9";
        isImageliked = false;
    }
}