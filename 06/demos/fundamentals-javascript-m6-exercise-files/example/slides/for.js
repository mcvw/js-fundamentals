// For Loop
let departments = ["Marketing", "Engineering", "HR"];
for(let i = 0; i < departments.length; i++) {
  console.log(departments[i]);
}

// For...of Loop
for(let val of departments) {
  console.log(val);
}

// For...in Loop
let obj = { firstName: "David", lastName: "Tucker" };
for(let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}