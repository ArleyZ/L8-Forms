// JavaScript code for form validation
let my_form = document.getElementById("myForm");
let input_field = document.getElementById("inputField");


// Clear the error message so that I can submit another input
input_field.addEventListener("change",function(){
  input_field.setCustomValidity("");
})


// Prevent form from submitting
my_form.addEventListener("submit", function(event) {
  input_field.setCustomValidity("");
  event.preventDefault();
  console.log("Submit Sent");
  validate(event);
});



function validate(e){
  console.log("Trying to validate");

  // Retrieve the input field value
  let inputValue = input_field.value;

  // Regular expression pattern for alphanumeric input
  let regEx = /^[a-zA-Z0-9]*$/;


  // Check if the input value matches the pattern
  if(!regEx.test(inputValue)){
    // Invalid input: display error message
    console.log("Test Result: " + inputValue + " is invalid")
    input_field.setCustomValidity("Error Invalid Input: Input must be alphanumeric");
    e.preventDefault();

  }else{
    // Valid input: display confirmation and submit the form
    console.log("Test Result: " + inputValue + " is valid")
    my_form.submit();
    window.alert(inputValue + " Successfully submitted.");
  }
}
