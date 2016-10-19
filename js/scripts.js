

var add = function(number1, number2) {
  return number1 + number2;
};

var sub = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
});
$(document).ready(function() {
  $("form#sub").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = sub(number1, number2);
    $("#output2").text(result);
  });
});
$(document).ready(function() {
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#output3").text(result);
  });
});
$(document).ready(function() {
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#output4").text(result);
  });
});
