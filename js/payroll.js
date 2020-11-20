window.addEventListener('DOMContentLoaded', (event)=>{
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener("input", function () {
        if (name.value.length==0){
            textError.textContent = "";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input',function(){
        output.textContent = salary.value;
    }); 
    
    const date = document.querySelector(".date");
    const dateError = document.querySelector(".date-error");
    date.addEventListener("input", function () {
        var day = document.getElementById("day").value;
        var month = document.getElementById("month").value;
        var year = document.getElementById("year").value;
        var startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        try{
            (new EmployeePayrollData()).startDate = startDate;
            dateError.textContent = "";
        }catch(e){
            dateError.textContent = e;
        }
    });
    
});

const save = ()=>{
    try{
        let employeePayrollData = createEmployeePayroll();
    }catch(e){
        return ;
    }
};

const  createEmployeePayroll = ()=>{
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputValueById('#name');
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }

    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');

    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
    getInputValueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue)=>{
    let allItems = document.querySelectorAll(propertyValue);
    let selItems =[];
    allItems.forEach(item=>{
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id)=>{
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id)=>{
    let value = document.getElementById(id).value;
    return value;
}

// function save(){
//     var name= document.getElementById("name").value;
//     var picture = document.querySelector('input[name = profile]:checked').value;
//     var gender = document.querySelector('input[name = gender]:checked').value;
//     var department =document.querySelector('input[name = department]:checked').value;
//     var salary = document.getElementById("salary").value;
//     var day = document.getElementById("day").value;
//     var month = document.getElementById("month").value;
//     var year = document.getElementById("year").value;
//     var note = document.getElementById("notes").value;
//     var startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

//    const employeePayrollData = new EmployeePayrollData(name, picture, gender, department, salary, startDate, note);
//    alert("Entered data is saved!\n" + employeePayrollData.toString());
//   } 