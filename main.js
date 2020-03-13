// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function(){
  const allLikes = document.querySelectorAll(".like-glyph");
  for (const like of allLikes) {
    like.addEventListener("click", function(){
      mimicServerCall()
      .then (res => {
        if (like.innerText == FULL_HEART) {
          like.innerText = EMPTY_HEART;
        } else {
          like.innerText = FULL_HEART;
        };
        like.classList.toggle('activated-heart');
      })
      .catch(function(reject) {
      errorBar = document.getElementById("modal");
      errorBar.className = "block";
      msg = document.getElementById("modal-message");
      msg.innerText = reject;
      setTimeout(function(){ errorBar.className = "hidden"; }, 2000);
      }); 
    })
  }
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
