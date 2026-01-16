// Creating a Set
let agileTeam = new Set();

// Populating a Set
agileTeam.add("employee1234");
agileTeam.add("employee1235");
console.log(agileTeam.size); // 2

// Trying to re-add a value
agileTeam.add("employee1235");
console.log(agileTeam.size); // 2 (unchanged)

// Checking if an item is in the Set
console.log(agileTeam.has("employee1235")); // true

// Deleting an item from the Set
agileTeam.delete("employee1234");
console.log(agileTeam.size); // 1