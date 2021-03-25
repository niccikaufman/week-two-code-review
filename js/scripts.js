$(document).ready(function() {
  $("#submit").click(function(){
    var result = parseInt($("input:radio.question1:checked").val()) + parseInt($("input:radio.question2:checked").val()) + parseInt($("input:radio.question3:checked").val()) + parseInt($("input:radio.question4:checked").val()) + parseInt($("input:radio.question5:checked").val()) + parseInt($("input:radio.question6:checked").val()) + parseInt($("input:radio.question7:checked").val());
    console.log(result);

    if (result <= 7){
      $(".results").show();
      $("#quiz-result").text("lazy");
      $("#lazy").show();
      $("#submit").toggle();

    }
    else if (result <= 21 && result > 8){
      $(".results").show();
      $("#quiz-result").text("snooty");
      $("#snooty").show();
      $("#submit").toggle();

    }
    else if (result <= 35 && result > 22){
      $(".results").show();
      $("#quiz-result").text("cranky");
      $("#cranky").show();
      $("#submit").toggle();

    }
    else if (result <= 49 && result > 36){
      $(".results").show();
      $("#quiz-result").text("jock");
      $("#jock").show();
      $("#submit").toggle();

    }
    event.preventDefault();
  });
});
