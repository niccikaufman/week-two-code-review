function addInput(input1, input2, input3, input4, input5, input6, input7) {
  return input1 + input2 + input3 + input4 + input5 + input6 + input7;
}
let logEntries = [];

$(document).ready(function() {
  $("#submit").click(function(){
    const q1 = +($("input:radio.question1:checked").val());
    const q2 = +($("input:radio.question2:checked").val());
    const q3 = +($("input:radio.question3:checked").val());
    const q4 = +($("input:radio.question4:checked").val());
    const q5 = +($("input:radio.question5:checked").val());
    const q6 = +($("input:radio.question6:checked").val());
    const q7 = +($("input:radio.question7:checked").val());
    
    let total = addInput(q1, q2, q3, q4, q5, q6, q7);
    logEntries.push(total);
    console.log(logEntries);

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
