// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
 const errorMsg = document.getElementById("modal")
 errorMsg.className = "hidden"
 const hearts = document.querySelectorAll(".like")

document.addEventListener("DOMContentLoaded", function() {
  hearts.forEach(function(heart) {
    heart.addEventListener("click", function(event) {
      console.log("hi")
      mimicServerCall("http://asdfadadsf.com")
      .then(function(response) {
        errorMsg.className = "hidden"
        if (heart.innerText === `Like! ${EMPTY_HEART}`) {
          heart.innerText = FULL_HEART
        } else {
          heart.innerText = `Like! ${EMPTY_HEART}`
        }
      })
      .catch(function(error) {
        errorMsg.className = ""
        alert("ALErt!")
        console.log(error)
      })
    })
  })
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
