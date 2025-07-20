let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript = inputString.includes("JavaScript");
let codingPosition = inputString.indexOf("Coding");
let startsWithWelcome = inputString.trim().startsWith("Welcome");
let endsWithToday = inputString.trim().endsWith("today.");

// 2. Transforming
let lowercaseString = inputString.toLowerCase();
let uppercaseString = inputString.toUpperCase();
let trimmedString = inputString.trim();
let replacedString = inputString.replace("JavaScript", "coding");

// 3. Breaking Apart
let wordsArray = inputString.trim().split(" ");

// 4. Retrieving
let firstCharacter = trimmedString.charAt(0);
let extractedBootcamp = inputString.slice(inputString.indexOf("Bootcamp"), inputString.indexOf("Bootcamp") + "Bootcamp".length);

// Log all results
console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});
