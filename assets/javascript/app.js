$(document).ready(function () {
  //  VARIABlES
  // =======================================================================================================

  var number;

  var intervalID;

  var questionsArray = ["How many times has Liverpool won the Champions League?", "When was the last time Liverpool won the English Premier League?", "How many times has Liverpool won the English Premier League?", "Who has the most first-team goals for Liverpool?", "When did 'You'll Never Walk Alone' become Liverpool's anthem?"];

  var index = 0;

  var answers = [
    ["5 Times", "2 Times", "7 Times", "1 Time"],
    ["2009", "2013", "1990", "1997"],
    ["3 Times", "18 Times", "9 Times", "12 Times"],
    ["Steven Gerrard", "Ian Rush", "Kenny Dalglish", "Robbie Fowler"],
    ["1949", "1969", "1955", "1962"],
    ["5 Times", "1990", "18 Times", "Ian Rush", "1962"]
  ]

  var gifArray = ["https://media.giphy.com/media/l0Iy294JIZv3s2FEs/giphy.gif",  "https://youtu.be/XlP9KGjqXf4" ];

  var correctAnswers= 0;





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





  // FUNCTIONS
  // ======================================================================================================

  // New Question function: empties all DOM elements, appends new question, and calls the runTimer function to start the 10 second timer


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

// runTimer function: 
  function runTimer() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
  }



  function threeSeconds() {
    clearInterval(intervalID);
    var questionTimeout = setTimeout(newQuestion, 3000);
    $(".question-display")
      .empty()
      


      $("#answer-1")
        .empty()



      $("#answer-2")
        .empty()



      $("#answer-3")
        .empty()



      $("#answer-4")
        .empty()


      if (index < questionsArray.length - 1) {
        index++;
        

      } else {

        
        $(".time-display")
          .empty()
          .append("Game Over");
      
        clearTimeout(questionTimeout);
        

      }

    }
  


  function decrement() {
    number--;
    $(".time-display")
      .empty()
      .append("Time Remaining: " + number);
    if (number === 0) {
      console.log(number);
      // stop();
      $(".time-display")
        .empty()
        .append("Time's Up");
      clearInterval(intervalID);
      threeSeconds();
    }
  }

  
  // MAIN PROCESS
  // ============================================================================================================


  $(".click-btn").on("click", function () {
      newQuestion();
    }

  )
  $("#answer-1").on("click", function () {
      threeSeconds();
      var clickAnswer = answers[index[0]];
      if (clickAnswer === answers[5]);
      correctAnswers++;
      console.log("you the shit");
    }

  )
  $("#answer-2").on("click", function () {
      threeSeconds();
      var clickAnswer = answers[index[1]];
      if (clickAnswer === answers[5]);
      correctAnswers++;
      console.log("you the shit");
    }

  )
  $("#answer-3").on("click", function () {
      threeSeconds();
      var clickAnswer = answers[index[2]];
      if (clickAnswer === answers[5]);
      correctAnswers++;
      console.log("you the shit");
    }

  )
  $("#answer-4").on("click", function () {
      threeSeconds();
      var clickAnswer = answers[index[3]];
      if (clickAnswer === answers[5]);
      correctAnswers++;
      console.log("you the shit");
    }

  )
  





});