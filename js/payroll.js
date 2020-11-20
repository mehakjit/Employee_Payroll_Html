const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
salary.addEventListener('input',function(){
    output.textContent = salary.value;
}); 

const name = document.querySelector("#name");
const textError = document.querySelector(".text-error");
const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
name.addEventListener("input", function () {
  if (nameRegex.test(name.value)) textError.textContent = "";
  else textError.textContent = "Name is Incorrect!";
});

const date = document.querySelector(".date");
const dateError = document.querySelector(".date-error");
date.addEventListener("input", function () {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    let days = 30;
    var todayDate = new Date();
    var lastDate = new Date(todayDate.getTime() - (days * 24 * 60 * 60 * 1000));
    if (startDate>=lastDate && startDate<=todayDate) dateError.textContent = "";
    else dateError.textContent = "Enter valid date!";
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
