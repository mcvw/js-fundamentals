// Import Sample Data
import employees from './data.json' with { type: 'json' }

import createPrompt from 'prompt-sync';
let prompt = createPrompt();

const logEmployee = (employee) => {
  Object.entries(employee).forEach(entry => {
    console.log(`${entry[0]}: ${entry[1]}`);
  });
}

function getInput(promptText, validator, transformer) {
  let value = prompt(promptText);

  if(validator && !validator(value)) {
    console.error(`--Invalid input`);
    // single entry approach
    //process.exit(1);

    // recursive approach
    return getInput(promptText, validator, transformer);
  }

  if(transformer) {
    return transformer(value);
  }
  return value;
}

// Transformer functions
const transformBooleanValue = (input) => {
  return (input === "yes");
}

// Validator functions
const isStringInputValid = function (input) {
  return (input) ? true : false;
}
// Arrow function version of isStringInputValid
/*
const isStringInputValid = (input) => {
  return (input) ? true : false;
}
*/

const isBooleanInputValid = function (input) {
  return (input === "yes" || input === "no");
}

// Non Higher order approach
/*
const isStartYearValid = function (input) {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1990 || numValue > 2023) {
    return false;
  }
  return true;
}

const isStartMonthValid = function (input) {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1 || numValue > 12) {
    return false;
  }
  return true;
}

const isStartDayValid = function (input) {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1 || numValue > 31) {
    return false;
  }
  return true;
}
*/

// Higher order approach
const isIntegerValid = (min, max) => {
  return (input) => {
    let numValue = Number(input);
    if (!Number.isInteger(numValue) || numValue <min || numValue > max) {
      return false;
    }
    return true;
  }
}

// Application commands

function listEmployees() {
  console.log(`Employee List ----------------------------`);
  console.log('');

  // for-loop approach
  /*
  for (let emp of employees) {
    for (let property in emp) {
      console.log(`${property}: ${emp[property]}`);
    }
    console.log('');
    prompt('Press enter to continue...');
  }
  */

  employees.forEach(e => {
    logEmployee(e);
    prompt('Press enter to continue...');
  })
  // functional approach

  console.log(`Employee list completed`);
}

function addEmployee() {
    console.log(`Add Employee -----------------`);
    console.log('');

    let employee = {};
    employee.firstName = getInput("First Name: ", isStringInputValid);
    employee.lastName = getInput("Last Name: ", isStringInputValid);
    // Non higher order approach
    //let startDateYear = getInput("Employee Start Year (1990-2023): ", isStartYearValid);
    // Higher order approach
    let startDateYear = getInput("Employee Start Year (1990-2023): ", isIntegerValid(1990,2023));

    // Non higher order approach
    //let startDateMonth = getInput("Employee Start Month (1-12): ", isStartMonthValid);
    // Higher order approach
    let startDateMonth = getInput("Employee Start Month (1-12): ", isIntegerValid(1, 12));

    // Non higher order approach
    //let startDateDay = getInput("Employee Start Day (1-31): ", isStartDayValid);
    // Higher order approach
    let startDateDay = getInput("Employee Start Day (1-31): ", isIntegerValid(1, 31));

    employee.startDate = new Date(startDateYear, startDateMonth, startDateDay);
    // transformer function version
    //employee.isActive = getInput("Is employee active (yes or no): ", isBooleanInputValid, transformBooleanValue);
    // inline arrow function version
    employee.isActive = getInput("Is employee active (yes or no): ", isBooleanInputValid, i => (i === "yes"));

    // Output Employee JSON
    const json = JSON.stringify(employee, null, 2);
    console.log(`Employee: ${json}`);
}

// Search for employees by ID
function searchById() {
  const id = getInput("Employee ID: ", null, Number);
  const result = employees.find(e => e.id === id);
  if (result) {
    console.log("");
    logEmployee(result);
  } else {
    console.log("No results...");
  }
}

// Search for employees by Name
function searchByName() {
  const firstNameSearch = getInput("First Name: ").toLowerCase();
  const lastNameSearch = getInput("Last Name: ").toLowerCase();

  const results = employees.filter(e => {
  if (firstNameSearch && !e.firstName.toLowerCase().includes(firstNameSearch)) {
    return false;
  }
  if (lastNameSearch && !e.lastName.toLowerCase().includes(lastNameSearch)) {
    return false;
  }
  return true;
  });
  results.forEach((e, idx) => {
    console.log("");
    console.log(`Search Result ${idx + 1} ---`);
    logEmployee(e);
  });
}


// Application execution



// Get the command the user wants to exexcute
const command = process.argv[2].toLowerCase();

switch (command) {

  case 'list':
    listEmployees();
    break;

  case 'add':
    addEmployee();
    break;

  case 'search-by-id':
    searchById();
    break;

  case 'search-by-name':
    searchByName();
    break;

  default:
    console.log('Unsupported command. Exiting...');
    process.exit(1);

}



