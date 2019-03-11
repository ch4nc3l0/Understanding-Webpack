const getnumbers = () => {
  // Use jQuery to get form input values
  number1 = $("#number1")
    .val()
    .trim();
  number2 = $("#number2")
    .val()
    .trim();
  // Convert input strings to actual numbers
  num1 = Number(number1);
  num2 = Number(number2);
  // Quick check to make sure inputs are numbers
  if (num1 && num2) {
    return num1, num2;
  }
  // Show error message if both inputs are not numbers
  else {
    $("#additionerror").show();
  }
}


const addnumbers = () => {
  // Run getnumbers to get inputs
  getnumbers();
  // Do addition
  result = num1 + num2;
  // Set value into HTML id named answer
  $("#answer").val(result);
}