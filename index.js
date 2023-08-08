//button press

NumberofDrums=document.querySelectorAll(".drum").length
for(i=0; i<NumberofDrums; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
 
  // var audio = new Audio('snare.mp3');
  //  audio.play();
  var keyplay = this.innerHTML
  makesound(keyplay)
  keyanymation(keyplay)



})
}
//key press
const pressedkey = addEventListener("keypress", function(value){
  makesound(value.key)
  keyanymation(value.key)
})

function makesound(key){
  switch (key) {
    case "a": 
       var audio = new Audio('snare.mp3');
       audio.play();
      break;
  
    case "s": 
       var audio = new Audio('tom-4.mp3');
       audio.play();
      break;
  
    case "d": 
       var audio = new Audio('crash.mp3');
       audio.play();
      break;
  
    case "f": 
       var audio = new Audio('tom-1.mp3');
       audio.play();
      break;
  
    case "j": 
       var audio = new Audio('tom-2.mp3');
       audio.play();
      break;
    
    case "k": 
       var audio = new Audio('tom-3.mp3');
       audio.play();
      break;
  
    case "l": 
      var audio = new Audio('kick-bass.mp3');
      audio.play();
     break;
  
    default:
      alert("you pressed wrong key")
      break;
  }
}


function keyanymation(activkay){
  let keybord = document.querySelector("."+ activkay)
   keybord.classList.add("actkey")

   setTimeout (function(){
    keybord.classList.remove('actkey')
   },200)
}