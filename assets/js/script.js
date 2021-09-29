var mainBox = document.getElementById("gameBox");
var startButton = document.getElementById("startButton");
var timerEl = document.querySelector(".timer");
var container = document.querySelector("#sb");
var nexcontainer = document.querySelector(".nexbut")
var questionEl = document.querySelector(".qBox");
var submit1 = document.getElementById("submit1");
var submit2 = document.getElementById("submit2");
var submit3 = document.getElementById("submit3");
var submit4 = document.getElementById("submit4");
var nextButton = document.getElementById("nextButton");
var finishBox = document.getElementById("finishBox");
var finalResults = document.getElementById("finalResults")
var playAgain = document.getElementById("playAgain");
var save = document.getElementById("save");
var initials = document.getElementById("initials");
var message = document.getElementsByClassName("message");
var initials = document.getElementById("initials");
var saveBox = document.getElementById("saveBox");
var score = 0;
var score1 = 0;
var score2 = 0;
var score3 = 0;
var score4 = 0;
var score5 = 0;



var secondsLeft = 60;
//Question 1 Choices
var questionOneA = ["Question 1", "Laugh", "Tulip Houses", "Choice Name A"];
var questionOneB = ["Question 1", "Cry", "Dog Houses", "Choice Name B"];
var questionOneC = ["Question 1", "Kiss", "Mushroom Houses", "Choice Name C"];
var questionOneD = ["Question 1", "Goodbye", "Glass Houses", "Choice Name D"];
//Question 2 Choices
var questionTwoA = ["Question 2", "Laugh", "Felix", "Choice Name 2A"];
var questionTwoB = ["Question 2", "Cry", "Sylvester", "Choice Name 2B"];
var questionTwoC = ["Question 2", "Kiss", "Garfield", "Choice Name 2C"];
var questionTwoD = ["Question 2", "Goodbye", "Calvin", "Choice Name 2D"];
//Question 3 Choices
var questionThreeA = ["Question 3", "Laugh", "The Dark Knight", "Choice Name 3A"];
var questionThreeB = ["Question 3", "Cry", "Maverick", "Choice Name 3B"];
var questionThreeC = ["Question 3", "Kiss", "The Red Baron", "Choice Name 3C"];
var questionThreeD = ["Question 3", "Goodbye", "Flying Ace", "Choice Name 3D"];
//Question 4 Choices A is correct
var questionFourA = ["Question 4", "Laugh", "The More You Know", "Choice Name 4A"];
var questionFourB = ["Question 4", "Cry", "All for Freedaom. Freedom for All", "Choice Name 4B"];
var questionFourC = ["Question 4", "Kiss", "And Knowing is Half the Battle", "Choice Name 4C"];
var questionFourD = ["Question 4", "Goodbye", "Be All You Can Be", "Choice Name 4D"];
//Question 5 Choices B is correct
var questionFiveA = ["Question 5", "Laugh", "Snorlax", "Choice Name 5A"];
var questionFiveB = ["Question 5", "Cry", "Electrobuzz", "Choice Name 5B"];
var questionFiveC = ["Question 5", "Kiss", "Electrmike", "Choice Name 5C"];
var questionFiveD = ["Question 5", "Goodbye", "Pikachu", "Choice Name 5D"];

//GAME TIMER

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
            document.querySelector("#gameBox").style.visibility = "hidden";
            finalCount();

            //Call function finalResults that has final results
        }
        //function goDark () {
            // if (secondsLeft === 0) {
            //     document.querySelector("#gameBox").style.visibility = "hidden";
            // }
        //}

    }, 1000);
}






function questionOne() {
    //Change the choices for Question 1
    document.getElementById("anAlabel").textContent= questionOneA[2];
    document.getElementById("anBlabel").textContent= questionOneB[2];
    document.getElementById("anClabel").textContent= questionOneC[2];
    document.getElementById("anDlabel").textContent= questionOneD[2];
    document.getElementById("questionLi").textContent= "What Do Smurfs Live In?";
    document.querySelector("#submit1").style.display = "inline";
    // C is the correct answer 
    submit1.addEventListener("click", function(event) {
     event.preventDefault();
     event.stopPropagation();
     console.log(event.target);
     var radios = document.getElementsByName("answers");
     
     if(radios[0].checked) {
         
         console.log(radios[0].value);
     };
     if(radios[1].checked) {
         console.log(radios[1].value);
     };
     if(radios[2].checked) {
         //alert("Question 4 Answer C");
         console.log(radios[2].value);
         var point1 = 1
         var timebonuse1 = secondsLeft
         score1= point1 + parseInt(timebonuse1);
         console.log(score1);
     };
     if(radios[3].checked) {
         console.log(radios[3].value);

     };
     document.querySelector("#submit1").style.display = "none";
 questionTwo(); 
     
     }); return score1;
     
}
    
    
    
    
    function questionTwo() {
    
    //document.getElementById("answer1").value = questionTwoA[1];
    document.getElementById("anAlabel").textContent= questionTwoA[2];
    //document.getElementById("anAlabel").htmlFor= questionTwoA[3];
    
    
    //document.getElementById("answer2").value = questionTwoB[1];
    document.getElementById("anBlabel").textContent= questionTwoB[2];
    //document.getElementById("anBlabel").htmlFor= questionTwoB[3];
    
    
    //document.getElementById("answer3").value = questionTwoC[1];
    document.getElementById("anClabel").textContent= questionTwoC[2];
    //document.getElementById("anClabel").htmlFor= questionTwoC[3];
    
    
    //document.getElementById("answer4").value = questionTwoD[1];
    document.getElementById("anDlabel").textContent= questionTwoD[2];
    //document.getElementById("anDlabel").htmlFor= questionTwoD[3];
    
    //document.getElementById("questionLi").htmlFor= "Question 2";
    document.getElementById("questionLi").textContent= "Which Cartoon Character Loves Lasagne?";
    //document.querySelector("#submit2").style.display = "inline";
    document.querySelector("#submit2").style.display = "inline";
    // C is the correct answer 
    submit2.addEventListener("click", function(event) {
     event.preventDefault();
     event.stopPropagation();
     console.log(event.target);
     var radios = document.getElementsByName("answers");
     
     if(radios[0].checked) {
         
         console.log(radios[0].value);
     };
     if(radios[1].checked) {
         console.log(radios[1].value);
     };
     if(radios[2].checked) {
         //alert("Question 4 Answer C");
         console.log(radios[2].value);
         var point2 = 1
         var timebonuse2 = secondsLeft
         score2= point2 + parseInt(timebonuse2);
         console.log(score2);
     };
     if(radios[3].checked) {
         console.log(radios[3].value);

     };
     document.querySelector("#submit2").style.display = "none";
 questionThree(); 
     
     }); return score2;
     
}
    
    function questionThree() {
    
        // document.getElementById("answer1").value = questionThreeA[1];
        document.getElementById("anAlabel").textContent= questionThreeA[2];
        // document.getElementById("anAlabel").htmlFor= questionThreeA[3];
        
        
        // document.getElementById("answer2").value = questionThreeB[1];
        document.getElementById("anBlabel").textContent= questionThreeB[2];
        // document.getElementById("anBlabel").htmlFor= questionThreeB[3];
        
        
        // document.getElementById("answer3").value = questionThreeC[1];
        document.getElementById("anClabel").textContent= questionThreeC[2];
        // document.getElementById("anClabel").htmlFor= questionThreeC[3];
        
        
        // document.getElementById("answer4").value = questionThreeD[1];
        document.getElementById("anDlabel").textContent= questionThreeD[2];
        // document.getElementById("anDlabel").htmlFor= questionThreeD[3];
        
        // document.getElementById("questionLi").htmlFor= "Question 3";
        document.getElementById("questionLi").textContent= "Snoopy Fights Which Famous Pilot in It's the Great Pumpkin Charlie Brown?";
        document.querySelector("#submit3").style.display = "inline";
       // C is the correct answer 
       submit3.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(event.target);
        var radios = document.getElementsByName("answers");
        
        if(radios[0].checked) {
            
            console.log(radios[0].value);
        };
        if(radios[1].checked) {
            console.log(radios[1].value);
        };
        if(radios[2].checked) {
            //alert("Question 4 Answer C");
            console.log(radios[2].value);
            var point3 = 1
            var timebonuse3 = secondsLeft
            score3= point3 + parseInt(timebonuse3);
            console.log(score3);
        };
        if(radios[3].checked) {
            console.log(radios[3].value);

        };
        document.querySelector("#submit3").style.display = "none";
    questionFour(); 
        
        }); return score3;
        
}
    
    function questionFour() {
    
        //change all the values for question 4
        document.getElementById("anAlabel").textContent= questionFourA[2];
        document.getElementById("anBlabel").textContent= questionFourB[2];
        document.getElementById("anClabel").textContent= questionFourC[2];
        document.getElementById("anDlabel").textContent= questionFourD[2];
        document.getElementById("questionLi").textContent= "What is G.I. Joe's Slogan?";
        document.querySelector("#submit4").style.display = "inline";
           // C is the correct answer 
           submit4.addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            console.log(event.target);
            var radios = document.getElementsByName("answers");
            
            if(radios[0].checked) {
                
                console.log(radios[0].value);
            };
            if(radios[1].checked) {
                console.log(radios[1].value);
            };
            if(radios[2].checked) {
                //alert("Question 4 Answer C");
                console.log(radios[2].value);
                var point4 = 1
                var timebonuse4 = secondsLeft
                score4= point4 + parseInt(timebonuse4);
                console.log(score4);
            };
            if(radios[3].checked) {
                console.log(radios[3].value);

            };
            document.querySelector("#submit4").style.display = "none";
        questionFive(); 
            
            }); return score4;
            
    }
    
    function questionFive() {
        
        //Change all the values for question 5
        document.getElementById("anAlabel").textContent= questionFiveA[2];   
        document.getElementById("anBlabel").textContent= questionFiveB[2];
        document.getElementById("anClabel").textContent= questionFiveC[2];
        document.getElementById("anDlabel").textContent= questionFiveD[2]; 
        document.getElementById("questionLi").textContent= "Which Electric Pokemon Did Ash End Up with Because He was Late to See Professor Oak";
        document.querySelector("#nextButton").style.display = "inline";
           //Answer D is correct 
           nextButton.addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            console.log(event.target);
            var radios5 = document.getElementsByName("answers");
            //console.log(radios);
            //console.log(radios.length);
            if(radios5[0].checked) {
                //alert("Answer 1");
                console.log(radios5[0].value);
                //localStorage.setItem("count5", secondsLeft);
                //localStorage.setItem("answer5", 0);
                secondsLeft-10;
            };
            if(radios5[1].checked) {
                //alert("Answer 2");
                console.log(radios5[1].value);
                //localStorage.setItem("count5", secondsLeft);
                //localStorage.setItem("answer5", 0);
                    secondsLeft-10;
            };
            if(radios5[2].checked) {
                //alert("Answer 3");
                console.log(radios5[2].value);
                //localStorage.setItem("count5", secondsLeft);
                //localStorage.setItem("answer5", 0);
                    secondsLeft-10;
            };
            if(radios5[3].checked) {
            //alert("Question 5 Answer D");
            console.log(radios5[3].value);
            //localStorage.setItem("count5", secondsLeft);
            //localStorage.setItem("answer5", 10);
            //record the points for the correct answer
            var point5 = 1
            var timebonuse5 = secondsLeft
            score5= point5 + parseInt(timebonuse5);
            console.log(score5);
            };
            
        finalCount(); 
            
            }); return score5;
           
    }
    
    function finalCount() {
        //alert("This will be the final score area " + (score1 + score2 + score3 + score4 + score5));
        document.querySelector("#gameBox").style.display = "none";
        document.querySelector("#finishBox").style.display = "inline";
        document.querySelector("#finishBox").style.visibility = "visible";
        score = (score1 + score2 + score3 + score4 + score5)
        document.getElementById("finalResults").textContent = ("Your Final Score: " + score);
        save.addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            console.log(initials.value)
            var person = initials.value
            localStorage.setItem("userInitials", JSON.stringify(person));
            renderMessage();
            
            });
            
            function renderMessage() {
                document.getElementById("saveBox").style.visibility = "hidden";
              var bigTime = JSON.parse(localStorage.getItem("userInitials"));
              if (bigTime !== null) {
                document.querySelector(".message").textContent = bigTime + 
                " scored " + score
              }
            };
        
        playAgain.addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            resetPage();
            gameTimer();
            questionOne();
            document.querySelector("#finishBox").style.display = "none";
       
       
    });
}

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
            document.querySelector("#gameBox").style.visibility = "hidden";
            finalCount();

            //Call function finalResults that has final results
        }
        //function goDark () {
            // if (secondsLeft === 0) {
            //     document.querySelector("#gameBox").style.visibility = "hidden";
            // }
        //}

    }, 1000);
} 
function resetPage(){
    window.location.reload();
}

//Lets play a game trigger
container.addEventListener("click", function() {
    gameTimer();
    document.querySelector("#gameBox").style.visibility = "visible";
    document.querySelector("#startButton").style.display = "none";
    questionOne();
});
