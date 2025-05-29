// Write your solution in this file!
const employee =  { 
    name: "John",
    streetAddress: "80 Dam Estate"

}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "80 Dam Estate");

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return{
        ...obj, 
        [key]: value,
    };
}



function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee };
    delete newEmployee[key];
    return newEmployee;

}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;

}
