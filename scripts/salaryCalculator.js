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
  let newEmployee = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    idNumber: $('#idNumber').val(),
    jobTitle: $('#jobTitle').val(),
    salary: $('#salary').val();
  } // end newEmployee object
  $('#employeeTable').append('
  <tr>
    <td> $(newEmployee.firstName) </td>
    <td> $(newEmployee.lastName) </td>
    <td> $(newEmployee.idNumber) </td>
    <td> $(newEmployee.jobTitle) </td>
    <td> $(newEmployee.salary) </td>
  </tr>
  ');
  //empty out input fields
  $('#firstName').val('');
  $('#lastName').val('');
  $('#idNumber').val('');
  $('#jobTitle').val('');
  $('#salary').val('');

  employees.push(newEmployee);
  monthlyCosts.push(employees);
  return newEmployee;
} // end submitForm
