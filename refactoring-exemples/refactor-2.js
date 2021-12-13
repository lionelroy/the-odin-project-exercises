function Person(name) {
  this.name = name;
}
function Employee(name, employeeCode) {
  Person.call(this, name);
  Employee.prototype.constructor = Person;
  this.employeeCode = employeeCode;
}

const employee = new Employee('Joe', 1);
console.log(employee)


// Refactor code which uses Class instead of simple constructor
class Person {
  constructor(name) {
    this.name = name;
  }
}
class Employee extends Person {
  constructor(name, employeecode) {   
    this.employeecode = employeecode;
  }
}

const employee = new Employee('Joe', 1);
console.log(employee)