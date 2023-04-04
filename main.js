let img = document.querySelector('.img-1');
function cars(car){
    img.src = car;
}
let pageColor = document.querySelector('.page-color');
function colors(color){
pageColor.style.background = color;
}
let ourGallary = document.querySelectorAll(".car-par img");

ourGallary.forEach(img => {
img.addEventListener('click', (e) =>{

let overlay = document.createElement("div");

overlay.className = 'popup-overlay';

document.body.appendChild(overlay);

let popupBox =document.createElement("div");

popupBox.className = 'popup-box';

let popupImage = document.createElement("img");

popupImage.src = img.src;

popupBox.appendChild(popupImage);

document.body.appendChild(popupBox);
let closeButton = document.createElement("span");
let closeButtonText = document.createTextNode("X");
closeButton.appendChild(closeButtonText);
closeButton.className = 'close-button';
    popupBox.appendChild(closeButton);

});

});
document.addEventListener("click", function(e){
if(e.target.className == 'close-button'){
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
}
})
function changeImages(fileName) {
   let images = document.querySelector('.img');
   images.setAttribute('src', fileName);
}

let span = document.querySelector(".up");
window.onscroll = function(){
    if(this.scrollY >=400){
        span.classList.add("show");
    }
    else{
        span.classList.remove("show");
    }
    span.onclick = function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
}

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 70);
})