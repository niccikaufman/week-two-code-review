var quizResults = function(input1,input2,input3,input4,input5,input6,input7){
  var result = input1 + input2 + input3 + input4 + input5 + input6 + input7;
  return result;
};

$(document).ready(function() {
  $("#submit").click(function(){
    var q1Input = parseInt($("input:radio.question1:checked").val());
    var q2Input = parseInt($("input:radio.question2:checked").val());
    var q3Input = parseInt($("input:radio.question3:checked").val());
    var q4Input = parseInt($("input:radio.question4:checked").val());
    var q5Input = parseInt($("input:radio.question5:checked").val());
    var q6Input = parseInt($("input:radio.question6:checked").val());
    var q7Input = parseInt($("input:radio.question7:checked").val());

    var questionOutput = quizResults(q1Input,q2Input,q3Input,q4Input,q5Input,q6Input,q7Input);

    if (questionOutput <= 7){
      $(".results").show();
      $("#quiz-result").text("lazy");
      $("#lazy").show();
      $("#submit").toggle();

    }
    else if (questionOutput <= 21 && questionOutput > 8){
      $(".results").show();
      $("#quiz-result").text("snooty");
      $("#snooty").show();
      $("#submit").toggle();

    }
    else if (questionOutput <= 35 && questionOutput > 22){
      $(".results").show();
      $("#quiz-result").text("cranky");
      $("#cranky").show();
      $("#submit").toggle();

    }
    else if (questionOutput <= 49 && questionOutput > 36){
      $(".results").show();
      $("#quiz-result").text("jock");
      $("#jock").show();
      $("#submit").toggle();

    }
    event.preventDefault();
  });
});
