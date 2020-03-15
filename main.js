// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heart = document.querySelector(".like-glyph");

// Your JavaScript code goes here!

const likeButton = document.querySelector(".like")
likeButton.addEventListener("click", function(event){
  mimicServerCall()
  .then(function(result) {
    if (heart.innerText == EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.className = 'activated-heart';
    }
    else {
      heart.innerText = EMPTY_HEART;
    }
  })
  .catch(function(error) {
    modal.classList.remove('hidden');
    setTimeout(function() {
      modal.classList.add('hidden');
    }, 500);
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
        // console.log("is randome failure");
        reject("Random server error. Try again.");
      } else {
        // console.log("is not randome failure");
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
