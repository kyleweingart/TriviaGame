$(document).ready(function() {
    //  VARIABlES
    // =======================================================================================================
  
    var number;

    var intervalID;
    
    var questionsArray= ["How many times has Liverpool won the Champions League?", "When was the last time Liverpool won the English Premier League?", "How many times has Liverpool won the English Premier League?", "Who has the most first-team goals for Liverpool?", "When did 'You'll Never Walk Alone' become Liverpool's anthem?"];

    var index = 0;
    // correctAnswerArray;

  
    // var  question1answers= ["5 Times", "2 Times", "7 Times", "1 Time"],
    // var  question2answers=  ["2009", "2013", "1990", "1997"],
    // var  question3answers= ["3 Times", "18 Times", "9 Times", "12 Times"],
    // var  question4answers= ["Steven Gerrard", "Ian Rush", "Kenny Dalglish", "Robbie Fowler"],
    // var  question5answers= ["1949", "1969", "1955", "1962"],
    // var  correctAnswers= ["5 Times", "1990", "18 Times", "Ian Rush", "1962"]

    var answers = [["5 Times", "2 Times", "7 Times", "1 Time"],
    ["2009", "2013", "1990", "1997"],
    ["3 Times", "18 Times", "9 Times", "12 Times"],
    ["Steven Gerrard", "Ian Rush", "Kenny Dalglish", "Robbie Fowler"],
    ["1949", "1969", "1955", "1962"],
    ["5 Times", "1990", "18 Times", "Ian Rush", "1962"]]
    
   

      // potential for later if i have time 

      // store the objects in an array 

    //   var answers = [
    //      {"question1answers": "5 Times", "2 Times", "7 Times", "1 Time"},
    //     {"question1answers": "2009", "2013", "1990", "1997"},
    //      {"question2answers": "3 Times", "18 Times", "9 Times", "12 Times"},
    //      {"question3answers": "Steven Gerrard", "Ian Rush", "Kenny Dalglish", "Robbie Fowler"},
    //      {"question4answers": "1949", "1969", "1955", "1962"},
    //     {"question5answers": "5 Times", "1990", "18 Times", "Ian Rush", "1962"}
    // ]
   


    // gifArray;
  
    // FUNCTIONS
    // ======================================================================================================
  
    // New Question function: resets all variables, chooses new random number, and resets the value of each crystal

     
    function newQuestion() {
     
      $(".click-btn").hide();
      number = 11;
      question = questionsArray[index];
      console.log(question);

      runTimer();
      
      $(".question-display")
      .empty()
      .append(questionsArray[index]);
      

      $("#answer-1")
      .empty()
      .append(answers[index][0]);
      

      $("#answer-2")
      .empty()
      .append(answers[index][1]);
      
      
      $("#answer-3")
      .empty()
      .append(answers[index][2]);
      
     
      $("#answer-4")
      .empty()
      .append(answers[index][3]);
      
    }

      function runTimer(){
        clearInterval(intervalID);
        intervalID = setInterval(decrement,1000);
        
        
        

      }
      function threeSeconds(){
        setTimeout(newQuestion, 3000);
        if (number === 0) {
          clearInterval(intervalID);
          $(".time-display")
          .empty()
          .append("Time's Up");
          
          console.log(index);
          console.log(questionsArray.length);

          // this section needs work - it does not seem that the timer is stopping. 
          
          if (index < questionsArray.length) {
          index++;
          
          } 
          else {
          // clearInterval(intervalID);
          $(".time-display")
          .empty()
          .append("Game Over");
          
          }
          
        }
      }
      

      function decrement(){
        number--;
        $(".time-display")
        .empty()
        .append("Time Remaining: " + number);
        if (number === 0) {
        // clearInterval(intervalID);
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
  