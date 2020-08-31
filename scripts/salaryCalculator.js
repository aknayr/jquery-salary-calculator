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
    salary: $('#salary').val()
  } // end newEmployee object
  $('#employeeTable').append('
  <tr>
    <td> $(newEmployee.firstName) </td>
    <td> $(newEmployee.lastName) </td>
    <td> $(newEmployee.idNumber) </td>
    <td> $(newEmployee.jobTitle) </td>
    <td> $(newEmployee.salary) </td>
  </tr>')

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

function monthylCosts(employeeArr) {
  console.log('in monthlyCosts');
  let totalCost = 0;
  for (let i=0; i < employeeArr.length; i++) {
    totalCost = totalCost + Number(employees[i].salary / 12);
  } // end for loop
  $('#monthlyCostDisplay').text('Monthly costs are $${totalCost}')

  if (totalCost > 20000) {
    $('#monthlyCostDisplay').css('background-color', 'light red');
  } else {
    $('#monthlyCostDisplay').css('background-color', 'light green');
  } // end if-else
  return totalCost;
} // end function monthlyCosts

function deleteEmployee{
  console.log('in deleteEmployee');
  let searchID = $(this).closest('tr').find('.empId').text();
  searchId = searchId.trim();
  for(let i=0; i < employee.length; i++){
    if (employees[i].idNumber === searchId) {
      employees.splice(i, 1);
    } // end if
  } // for-loop
  $(this).parent().parent().remove();
  monthlyCosts(employees);
  return;
} // end function deleteEmployee
