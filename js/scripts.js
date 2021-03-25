var addInput = function(input1, input2, input3, input4, input5, input6, input7) {
  return input1 + input2 + input3 + input4 + input5 + input6 + input7;
}

$(document).ready(function() {
  $("#submit").click(function(){
    var q1 = parseInt($("input:radio.question1:checked").val());
    var q2 = parseInt($("input:radio.question2:checked").val());
    var q3 = parseInt($("input:radio.question3:checked").val());
    var q4 = parseInt($("input:radio.question4:checked").val());
    var q5 = parseInt($("input:radio.question5:checked").val());
    var q6 = parseInt($("input:radio.question6:checked").val());
    var q7 = parseInt($("input:radio.question7:checked").val());
    
    var total = addInput(q1, q2, q3, q4, q5, q6, q7);

    if (total <= 7){
      $(".results").show();
      $("#quiz-result").text("lazy");
      $("#lazy").show();
      $("#submit").toggle();

    }
    else if (total <= 21 && total > 8){
      $(".results").show();
      $("#quiz-result").text("snooty");
      $("#snooty").show();
      $("#submit").toggle();

    }
    else if (total <= 35 && total > 22){
      $(".results").show();
      $("#quiz-result").text("cranky");
      $("#cranky").show();
      $("#submit").toggle();

    }
    else if (total <= 49 && total > 36){
      $(".results").show();
      $("#quiz-result").text("jock");
      $("#jock").show();
      $("#submit").toggle();

    }
    event.preventDefault();
  });
});
