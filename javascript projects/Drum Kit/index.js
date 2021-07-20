//
// var x=document.querySelectorAll(".drum");
// for(i=0;i<x.length;i++)x[i].addEventListener("click",hclick);
// function hclick(){
//   alert("ok");
// }


var x = document.querySelectorAll(".drum");

for (var i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function() {
    makesound(this.innerHTML);
    animation(this.innerHTML);
  })
};

document.addEventListener("keydown", function(event) {
  makesound(event.key);
  animation(event.key);
});

function makesound(key) {
  switch (key) {
    case 'w':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'a':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 's':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case 'd':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case 'j':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case 'k':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case 'l':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

  }

}


function animation(key) {
  var activebut = document.querySelector("." + key);
  activebut.classList.add("pressed");
  setTimeout(function() {
    activebut.classList.remove("pressed")
  }, 80);

}
