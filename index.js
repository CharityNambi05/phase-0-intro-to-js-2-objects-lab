// Write your solution in this file!
let employee = {
    name: "Alice",
    role: "Developer"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
 
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  

  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  

  let newEmployee = updateEmployeeWithKeyAndValue(employee, "address", "123 Main St");
  console.log(newEmployee); 
  console.log(employee); 
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "role", "Manager");
  console.log(employee); 


