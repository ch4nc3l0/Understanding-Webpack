export const checknumbers = (number1, number2) => {
  // Convert input strings to actual numbers
  let num1 = Number(number1);
  let num2 = Number(number2);
  // Quick check to make sure inputs are numbers
  if (num1 && num2) {
    return addnumbers(num1, num2)
  }
  // Show error message if both inputs are not numbers
  else {
    $("#answer").val('Not A Number');
    return $("#additionerror").show();
  }
}

export const addnumbers = (num1, num2) => {
  // Do addition
  let result = num1 + num2;
  // Set value into HTML id named answer
  $("#answer").val(result);
}