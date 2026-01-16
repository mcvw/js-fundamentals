// Creating a Map
let accessCodes = new Map();

// Populating a Map
accessCodes.set("employee1234", "8303");
accessCodes.set("employee1235", "1111");
console.log(accessCodes.size); // 2

// Retrieving values from a Map
let code = accessCodes.get("employee1234");
console.log(code); // 8303

// Delete values from a Map
accessCodes.delete("employee1235");
console.log(accessCodes.size); // 1