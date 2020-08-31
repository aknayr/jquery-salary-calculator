console.log('salaryCalculator.js');

$(document).ready(readyNow);

let employees = [];

function readyNow(){
  console.log('JQ');
  $(document).on('click', '#submitBtn', submitForm);
  $(document).on('click', '#deleteBtn', deleteEmployee);
  monthlyCosts(employees);
} // funtion readyNow

function submitForm(){
  console.log('Button was clicked');
  
}
