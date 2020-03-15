// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const error = document.getElementById("modal")
const likes = document.getElementsByClassName('like')

for (const like of likes) {
  like.addEventListener('click', () => {
    mimicServerCall().then( () => {
      const heart = like.children[0];
      if (heart.innerText == EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = 'activated-heart';
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = '';
      }
    })
    .catch(message => {
      error.className = "";
      error.innerText = message;
      setTimeout(function(){ 
        error.className = "hidden"; }, 5000);
    })
  })
};


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
