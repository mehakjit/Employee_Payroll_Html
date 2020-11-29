let isUpdate = false;
let employeePayrollObj = {};

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
    checkForUpdate();
});

const save = ()=>{
    try{
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
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

    employeePayrollData.profilePic = getSelectedValues('[name=photo]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');

    // let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
    // getInputValueById('#year');

    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

    employeePayrollData.startDate = date;
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    }else{
        employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}

const checkForUpdate = () => {
    const employeePayrollJson = localStorage.getItem("editEmp");
    isUpdate = employeePayrollJson ? true : false;
    if(!isUpdate) return;
    employeePayrollObj = JSON.parse(employeePayrollJson);
    setForm();
};

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

const resetForm = ()=>{
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', '');
    setTextValue('.salary-output', '400000');
    setValue('#notes', '');
    setValue('#day', '1');
    setValue('#month', '1');
    setValue('#year', '2020');
}

const setForm = () => {
    setValue("#name", employeePayrollObj._name);
    setSelectedValues("[name=photo]", employeePayrollObj._photo);
    setSelectedValues("[name=gender]", employeePayrollObj._gender);
    setSelectedValues("[name=department]", employeePayrollObj._department);
    setValue("#salary", employeePayrollObj._salary);
    setTextValue(".salary-output", employeePayrollObj._salary);
    setValue("#notes", employeePayrollObj._note);
    let date = stringifyDate(employeePayrollObj._startDate).split(" ");
    let month = new Date(date).getMonth() + 1;
    setValue("#day", date[0]);
    setValue("#month", month);
    setValue("#year", date[2]);
};

const unsetSelectedValues =(propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item=>{
        item.checked = false;   
    });
}

const setTextValue = (id, value)=>{
    const element  = document.querySelector(id);
    element.textContent = value;
}

const setSelectedValues = (propertyValue, value) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
       if(Array.isArray(value)){
         if(value.includes(item.value)) item.checked = true;
       }
       else if(item.value == value) item.checked = true;
    });
};

const setValue = (id, value)=>{
    const element  = document.querySelector(id);
    element.value = value;
}