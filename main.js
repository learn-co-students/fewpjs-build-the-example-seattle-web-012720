// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const selectHeart = document.querySelector(".like-glyph");
const errorMessage = document.getElementById("modal")

selectHeart.addEventListener("click", function(e){
  
  mimicServerCall() 

  .then(function(result){
    if (selectHeart.innerText == EMPTY_HEART){
    selectHeart.innerText = FULL_HEART;
    selectHeart.className = 'activated-heart';
    }
    else {
      selectHeart.innerText = EMPTY_HEART;
    }
  })
  .catch(function(error){
    errorMessage.classList.remove('hidden') 
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
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


