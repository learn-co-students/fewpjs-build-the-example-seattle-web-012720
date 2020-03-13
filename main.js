// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

let allHearts = document.querySelectorAll(".like");

function smashThatLike(option) {
  let heart = option.target;
  heart.innerText = glyphStates[heart.innerText];
  console.log(heart.innerText)
  heart.style.color = colorStates[heart.style.color];
}

for (let glyph of allHearts) {
  glyph.addEventListener("click", smashThatLike);
}

document.addEventListener("DOMContentLoaded", function (){
  document.getElementById("modal").className = "hidden";
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
} 
