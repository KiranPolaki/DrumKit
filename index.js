//We basically selected all the elements that would be an Array remember

//for each element we are going to add the event via addEventListner method
//addEventListner is a higher order function that can take other functions as input!
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  //these are anonymous fucntions we write here what ever we want to do when event is happened
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//adding it to the entire event
document.addEventListener("keydown", function (event) {
  //basically this event return what triggered the event
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("../sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log("This is the end my friend");
      break;
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed"),
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
}

/*This will give me the acces to the element which the event triggers when inside of an addeventlistner*/
