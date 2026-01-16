// Creating single-line strings
let firstName = "David";
let lastName = 'Tucker';
let title = `VP Engineering`;
title = `CTO`;

// String concatenation with the plus operator
let fullName = firstName + lastName;

// String concatenization with the template literals
fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Create multi-line strings with \n
let bio = "Line 1\nLine 2\nLine 3"
console.log(bio);

// Creating multi-line with backticks
bio = `About David Tucker:
David Tucker is the current CTO of Globomantics.
He also serves as an author for Pluralsight.`;

// Escaping characters
let quote = 'David said, \"Javascript is great"';
console.log(quote);
quote = "David said, \"Javascript is great\"";
console.log(quote);
quote = `Javascript can use 'single' and "double" quotes.`;
console.log(quote);
quote = `In Javascript, you must escape the \\ character`;
console.log(quote);

// String length
let length = quote.length;
console.log(`Quote length: ${length}`);

// Accessing specific character
let secondCharacter = quote[1];
console.log(`Second Character: ${secondCharacter}`);

// Changing case
let uppercaseName = fullName.toUpperCase();
console.log(uppercaseName);
let lowercaseName = fullName.toLowerCase();
console.log(lowercaseName);

// Finding a substring
let idx1 = fullName.indexOf("Dav");
console.log(`Index 1: ${idx1}`);
let idx2 = fullName.indexOf("ker");
console.log(`Index 2: ${idx2}`);
let idx3 = fullName.indexOf("xyz");
console.log(`Index 3: ${idx3}`);

// Does a string contain a substring
let doesContain = fullName.includes("Dav");
console.log(doesContain);