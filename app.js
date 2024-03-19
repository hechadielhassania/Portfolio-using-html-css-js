// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// Modified to use a variable instead of using ! operator
const isAllUnder25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;

// Check four: all unique numbers
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// New checks:
// Check if all numbers are divisible by 5.
const isDivisibleBy5 = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;

// Check if the first number is larger than the last.
const isFirstLargerThanLast = n1 > n4;

// Accomplish the arithmetic chain:
const result = ((n2 - n1) * n3) % n4;

// Finally, log the results.
console.log("isSum50:", isSum50);
console.log("isTwoOdd:", isTwoOdd);
console.log("isAllUnder25:", isAllUnder25);
console.log("isUnique:", isUnique);
console.log("isDivisibleBy5:", isDivisibleBy5);
console.log("isFirstLargerThanLast:", isFirstLargerThanLast);
console.log("Arithmetic Chain Result:", result);
