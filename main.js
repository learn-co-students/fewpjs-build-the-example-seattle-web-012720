// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.getElementsByClassName("like-glyph")
console.log(likeButtons);
for (let button of likeButtons){
  button.addEventListener("click", function(){
    if (mimicServerCall() === reject) {
      console.log("Reject")
    } else {
      changeHeart(button);
    }
  })
}

function changeHeart(button){
  button.innerText = FULL_HEART;
}


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
