const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
salary.addEventListener('input',function(){
    output.textContent = salary.value;
}); 


function save(){
    var name= document.getElementById("name").value;
    var picture = document.querySelector('input[name = profile]:checked').value;
    var gender = document.querySelector('input[name = gender]:checked').value;
    var department =document.querySelector('input[name = department]:checked').value;
    var salary = document.getElementById("salary").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var note = document.getElementById("notes").value;
    var startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

   const employeePayrollData = new EmployeePayrollData(name, picture, gender, department, salary, startDate, note);
   alert("Entered data is saved!\n" + employeePayrollData.toString());
  }  
