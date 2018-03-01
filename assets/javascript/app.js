$(document).ready(function() {
    //  VARIABlES
    // =======================================================================================================
  
    var number;

    var intervalID;
    
    var questionsArray= ["How many times has Liverpool won the Champions League?", "When was the last time Liverpool won the English Premier League?", "How many times has Liverpool won the English Premier League?"];

    // correctAnswerArray;
    var index = 0;
    // answerArray;

    // gifArray;
  
    // FUNCTIONS
    // ======================================================================================================
  
    // New Question function: resets all variables, chooses new random number, and resets the value of each crystal

     
    function newQuestion() {
      // for (var i = 0; i < questionsArray.length; i++) {
      $(".click-btn").hide();
      number = 11;
      question = questionsArray[index];
      console.log(question);
      
      $(".question-display")
      .empty()
      .append(questionsArray[index]);
      runTimer();

    
      

      

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
        setTimeout(newQuestion, 3000);
        if (number === 0) {
          // clearInterval(intervalID);
          $(".time-display")
          .empty()
          .append("Time's Up");
          index++;
          
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
  
   
    $(".click-btn").on("click", function(){
      newQuestion();
      }
    
    )

    
  
  });
  