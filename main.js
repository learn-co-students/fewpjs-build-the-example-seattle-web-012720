// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const liArray = document.getElementsByClassName("like")
for (var i = 0; i < liArray.length; i++) {
  const li = liArray[i]
  li.addEventListener("click", function(event){
    mimicServerCall()
    .then(function(response){
      if(li.className == "like"){
        li.className = "activated-heart"
      }else{
        li.className = "like"
      }
    })
    .catch(function(error){
      const errorDiv = document.getElementById("modal")
      errorDiv.classList.remove("hidden")
      setTimeout(function() {errorDiv.className = "hidden"}, 5000)
    })
  })
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
