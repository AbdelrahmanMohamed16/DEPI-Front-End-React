var cardsImages = document.querySelectorAll(".card img");
var layout = document.querySelector(".layout");
var layoutImage = document.querySelector(".layout .layoutBody .layoutImg img");
var leftArrow = document.querySelector(".layout .layoutBody .icons .leftArrow");
var exitSign = document.querySelector(".layout .layoutBody .icons .exitSign");
var rightArrow = document.querySelector(".layout .layoutBody .icons .rightArrow");
var currentIndex = 0;

for (let i = 0; i < cardsImages.length; i++) {
  cardsImages[i].addEventListener("click", function(e) {
    layout.classList.replace("d-none","d-flex");
    layoutImage.src = cardsImages[i].src;
    currentIndex = i;
  })
}

function nextImage(){
  currentIndex++;
  currentIndex %= (cardsImages.length);
  console.log(currentIndex);
  layoutImage.src = cardsImages[currentIndex].src;
}

function prevImage(){
  currentIndex--;
  if(currentIndex < 0) currentIndex = cardsImages.length-1;
  console.log(currentIndex);
  layoutImage.src = cardsImages[currentIndex].src;
}

function exitLayout(){
  layout.classList.replace("d-flex","d-none");
}

leftArrow.addEventListener("click", function() {
  prevImage();  
});

rightArrow.addEventListener("click", function() {
  nextImage();  
});

exitSign.addEventListener("click", function() {
  exitLayout();
})

document.addEventListener("keydown", function(e) {
  if(e.code == "ArrowRight") {
    nextImage();
  }
  else if(e.code == "ArrowLeft") {
    prevImage();
  }
  else if(e.code == "Escape") {
    exitLayout();
  }
})
