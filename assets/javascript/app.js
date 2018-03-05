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

  var gifArray = ["https://media.giphy.com/media/l0Iy294JIZv3s2FEs/giphy.gif",  "assets/images/dalglish.gif", "assets/images/1990.jpeg", "assets/images/ianrush.gif", "assets/images/scarves.jpeg" , "https://media.giphy.com/media/6Wqg7wOTcZnxK/giphy.gif" ];

  var correctAnswers= 0;



  // FUNCTIONS
  // ======================================================================================================

  // New Question function: empties all DOM elements, appends new question, and calls the runTimer function to start the 15 second timer


  function newQuestion() {

    $(".click-btn").hide();
    number = 16;
    question = questionsArray[index];
    console.log(question);

    runTimer();

    $(".image-display")
        .empty()

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
    var questionTimeout = setTimeout(newQuestion, 5000);
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

        console.log(index);

        // working on getting image to show up if question was correct
        

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
      // stop();
      $(".time-display")
        .empty()
        .append("Time's Up");
      clearInterval(intervalID);
      threeSeconds();
    }
  }

  // function checkAnswer(num) {
  //   var clickAnswer = answers[num][0]; 
  //     for (var i = 0; i <= answers[5].length; i++) {
  //     if (answers[5].indexOf(clickAnswer)=== -1) {
  //     $(".image-display")
  //         .empty()
  //         .append('<img src='  + gifArray[5] +' />');
  //     }
  //     else {
  //       console.log("yep");
  //       correctAnswers++; 
  //       console.log(index);
  //       $(".image-display")
  //         .empty()
  //         .append('<img src='  + gifArray[num] +' />');
  //     }
  //   }

  // }

  
  // MAIN PROCESS
  // ============================================================================================================

  
  $(".click-btn").on("click", function () {
      newQuestion();
    }

  )
  $("#answer-1").on("click", function () {
      
    // checkAnswer(index); 
      
      var clickAnswer = answers[index][0]; 
      for (var i = 0; i <= answers[5].length; i++) {
      if (answers[5].indexOf(clickAnswer)=== -1) {
      $(".image-display")
          .empty()
          .append('<img src='  + gifArray[5] +' />');
      }
      else {
        console.log("yep");
        correctAnswers++; 
        console.log(index);
        $(".image-display")
          .empty()
          .append('<img src='  + gifArray[index] +' />');
      }
    }
     
      threeSeconds();
     
        
       
      }


      
    

  )
  $("#answer-2").on("click", function () {

    var clickAnswer = answers[index][1]; 
    for (var i = 0; i <= answers[5].length; i++) {
    if (answers[5].indexOf(clickAnswer)=== -1) {
    $(".image-display")
        .empty()
        .append('<img src='  + gifArray[5] +' />');
    }
    else {
      console.log("yep");
      correctAnswers++; 
      console.log(index);
      $(".image-display")
        .empty()
        .append('<img src='  + gifArray[index] +' />');
    }
  }



    
     
     
    threeSeconds();
      
    }

  )
  $("#answer-3").on("click", function () {

    var clickAnswer = answers[index][2]; 
    for (var i = 0; i <= answers[5].length; i++) {
    if (answers[5].indexOf(clickAnswer)=== -1) {
    $(".image-display")
        .empty()
        .append('<img src='  + gifArray[5] +' />');
    }
    else {
      console.log("yep");
      correctAnswers++; 
      console.log(index);
      $(".image-display")
        .empty()
        .append('<img src='  + gifArray[index] +' />');
    }
  }
      
     
    
      threeSeconds();
    }

  )
  $("#answer-4").on("click", function () {

    var clickAnswer = answers[index][3]; 
    for (var i = 0; i <= answers[5].length; i++) {
    if (answers[5].indexOf(clickAnswer)=== -1) {
    $(".image-display")
        .empty()
        .append('<img src='  + gifArray[5] +' />');
    }
    else {
      console.log("yep");
      correctAnswers++; 
      console.log(index);
      $(".image-display")
        .empty()
        .append('<img src='  + gifArray[index] +' />');
    }
  }
     
      
      
      threeSeconds();
    }

  )
  





});