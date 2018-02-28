$(document).ready(function() {
    //  VARIABlES
    // =======================================================================================================
  
    var number;

    var intervalID;
    
    var questionsArray= ["How many times has Liverpool won the Champions League?", "When was the last time Liverpool won the English Premier League?", "How many times has Liverpool won the English Premier League?"];

    // correctAnswerArray;

    // answerArray;

    // gifArray;
  
    // FUNCTIONS
    // ======================================================================================================
  
    // New Question function: resets all variables, chooses new random number, and resets the value of each crystal

     
    function newQuestion() {
      for (var i = 0; i < questionsArray.length; i++) {
      $(".click-btn").hide();
      number = 11;
      question = questionsArray[i];
      console.log(question);
      
      $(".question-display")
      .empty()
      .append(questionsArray[i]);
      runTimer();

    }
      

      

      // $("#answer-1")
      // .empty()
      // .append("5 Times");

      // $("#answer-2")
      // .empty()
      // .append("0 Times");
      }

      function runTimer(){
        clearInterval(intervalID);
        intervalID = setInterval(decrement,1000);
        
        
        

      }
      function threeSeconds(){
        setTimeout(newQuestion, 10000);
        if (number === 0) {
          // clearInterval(intervalID);
          $(".time-display")
          .empty()
          .append("Time's Up");
          
        }
      }

      function decrement(){
        number--;
        $(".time-display")
        .empty()
        .append("Time Remaining: " + number);
        if (number === 0) {
        clearInterval(intervalID);
        threeSeconds();
        }
      }
    
  
   
  
    // MAIN PROCESS
    // ============================================================================================================
  
    // $(".win-display").append(wins);
    // $(".loss-display").append(losses);
  
    $(".click-btn").on("click", function(){
      newQuestion();
      }
    
    )

    
  //     console.log("i was clicked");
  //     var crystalStoredValue = $(this).attr("crystalvalue");
  //     console.log(" hi " + crystalStoredValue);
  //     crystalStoredValue = parseInt(crystalStoredValue);
  //     console.log("yo " + crystalStoredValue);
  //     totalScore = totalScore += crystalStoredValue;
  //     $(".score-display")
  //       .empty()
  //       .append(totalScore);
  //     console.log("total score " + totalScore);
  
  //     if (totalScore == randNumberChoice) {
  //       wins++;
  //       console.log("youwin");
  //       $(".win-display")
  //         .empty()
  //         .append(wins);
  //       newGame();
  //     } else if (totalScore > randNumberChoice) {
  //       losses++;
  //       console.log("youlose");
  //       $(".loss-display")
  //         .empty()
  //         .append(losses);
  //       newGame();
  //     }
  //   });
  });
  