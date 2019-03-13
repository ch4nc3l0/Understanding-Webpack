import { checknumbers } from './numbers'
import '../styles/index.sass'

$(document).ready(function () {

  $('#addanswer').on("click", () => {
    // Get numbers from user input
    let number1 = $("#number1").val().trim();
    let number2 = $("#number2").val().trim();
    // Send numbers to number.js
    checknumbers(number1, number2)
  })



})