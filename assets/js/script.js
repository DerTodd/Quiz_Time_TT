//Establish the var for questions
var mainBox = document.getElementById("gameBox");
var startButton = document.getElementById("startButton");
var timerEl = document.querySelector(".timer");
var container = document.querySelector("#sb");
var questionEl = document.querySelector(".qBox");


var secondsLeft = 60;

var questions = [
    {
        Question1: "What is Today",
        Answer: "Today",
        Choices: ["Today", "Tomorrow", "Monday"]
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]

gameBox
//Lets play a game trigger
container.addEventListener("click", function() {
    gameTimer();
    document.querySelector("#gameBox").style.visibility = "visible";
});
//add question to box
//questionEl.textContent = <h2>"Question 1"</h2>

function gameTimer() {
    var countdown = setInterval(function() {
        //seconds left  -1
        secondsLeft--;
        //add content string to HTML
        timerEl.textContent = secondsLeft + " Remaing Time!";
        // if (seconds === 5) {
        //     timerEl.textContent.style.color = "red";
        //     timerEl.textContent.style.font-size = 50px;
        // }
        if (secondsLeft === 0) {
            clearInterval(countdown)
            timerEl.textContent = "";
            //Call function finalResults that has final results
        }
        //function goDark () {
            // if (secondsLeft === 0) {
            //     document.querySelector("#gameBox").style.visibility = "hidden";
            // }
        //}

    }, 1000);
}

//Final results function
function finalResults () {
    document.querySelector("#gameBox").style.visibility = "visible";
}
//finalResults();
// container.addEventListener("click", function(event) {
//     var element = event.target;
//     console.log(element);
  
//     // TODO: Complete function
//     if(element.matches(".box")){
//     var state = element.getAttribute("data-state");
  
//     if(state === "hidden"){
//       // var num = 
//       element.textContent = element.getAttribute("data-number");
//       element.setAttribute("data-state", "visible");
//     }else{
//       element.textContent = " ";
//       element.setAttribute("data-state", "hidden");
//     }
//   }
  
//   });
//   imageContainer.addEventListener("click", function(event) {
//     var element = event.target;
  
//     // Check if the clicked element was an image
//     if (element.matches("img")) {
//       // Get the current value of the image's data-state attribute
//       var state = element.getAttribute("data-state");
  
//       if (state === "still") {
//         // Change the data-state attribute's value
//         // There are two different ways this attribute can be set
//         // element.dataset.state = "animate";
//         element.setAttribute("data-state", "animate");
//         var animateSrc =  element.getAttribute("data-animate");
//         // Update the image's source to the string being stored in the data-animate attribute
//         element.setAttribute("src", animateSrc);
//       } else {
//         // Change the attributes back to their non-animated values
//         // element.dataset.state = "still";
//         var stillSrc = element.getAttribute("data-still");
//         element.setAttribute("src", stillSrc);
//       }
//     }
//   });