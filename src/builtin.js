// Check if number is not a number, normally used on bad input
console.log(isNaN(1)); // false

// Check if number is finite
console.log(isFinite(1)); // true

// Parse a string to an integer, normally used with radix
console.log(parseInt("1", 10)); // 1

// Parse a string to a float
console.log(parseFloat("1.1")); // 1.1

// Evaluate a string as JavaScript code, unsafe
// oxlint-disable-next-line no-eval
console.log(eval("1 + 1")); // 2

// [String] Make every character in a string uppercase
console.log("Hello world".toUpperCase()); // "HELLO WORLD"

// [String] Make every character in a string lowercase
console.log("Hello world".toLowerCase()); // "hello world"

// [String] Remove whitespace from both ends of a string
console.log("   Hello world   ".trim()); // "Hello world"

// [String] Remove whitespace from the start of a string
console.log("   Hello world".trimStart()); // "Hello world"

// [String] Remove whitespace from the end of a string
console.log("Hello world   ".trimEnd()); // "Hello world"

// [String] Get a substring of a string
console.log("Hello world".substring(0, 5)); // "Hello"

// [String] Get a substring of a string using negative indices
console.log("Hello world".slice(-5)); // "world"

// [String] Replace a substring with another string
console.log("Hello world".replace("world", "there")); // "Hello there"

// [String] Split a string into an array of substrings
console.log("Hello world".split(" ")); // ["Hello", "world"]

// [String] Check if a string includes another string
console.log("Hello world".includes("lo wo")); // true

// [String] Check if a string starts with another string
console.log("Hello world".startsWith("Hello")); // true

// [String] Check if a string ends with another string
console.log("Hello world".endsWith("world")); // true

// [String] Repeat a string a specified number of times
console.log("Hello ".repeat(3)); // "Hello Hello Hello "

// [String] Pad the start of a string with another string until it reaches a specified length
console.log("5".padStart(3, "0")); // "005"

// [String] Pad the end of a string with another string until it reaches a specified length
console.log("5".padEnd(3, "0")); // "500"

// [String] Get the character at a specified index
console.log("Hello world".charAt(0)); // "H"

// [String] Get the index of the first occurrence of a substring
console.log("Hello world".indexOf("world")); // 6

// [String] Get the index of the last occurrence of a substring
console.log("Hello world".lastIndexOf("l")); // 9

// [Array] Check if an array includes a value
console.log([1, 2, 3].includes(2)); // true

// [Array] Get the index of the first occurrence of a value in an array
console.log([1, 2, 3].indexOf(2)); // 1

// [Array] Get the index of the last occurrence of a value in an array
console.log([1, 2, 3, 2].lastIndexOf(2)); // 3

// [Array] Check if there's an element in an array that satisfies a condition
console.log([1, 2, 3].some((x) => x > 2)); // true

// [Array] Check if all elements in an array satisfy a condition
console.log([1, 2, 3].every((x) => x > 0)); // true

// [Array] Get the first element in an array that satisfies a condition
console.log([1, 2, 3].find((x) => x > 2)); // 3

// [Array] Get the index of the first element in an array that satisfies a condition
console.log([1, 2, 3].findIndex((x) => x > 2)); // 2

// [Array] Reduce an array to a single value using a reducer function, usually used for summing or multiplying elements
console.log([1, 2, 3].reduce((acc, x) => acc + x)); // 6

// [Array] Reduce an array to a single value using a reducer function, with an initial value
console.log([1, 2, 3].reduce((acc, x) => acc + x, 4)); // 10

// [Array] Reduce an array to a single value using a reducer function, from right to left
console.log([1, 2, 3].reduceRight((acc, x) => acc - x)); // 0 (3 - 2 - 1)

// [Array] Get a new array with the results of calling a function on every element in an array
console.log([1, 2, 3].map((x) => x * 2)); // [2, 4, 6]

// [Array] Get a new array with all elements that satisfy a condition
console.log([1, 2, 3].filter((x) => x > 1)); // [2, 3]

// [Array] Check if an array contains a value
console.log([1, 2, 3].includes(2)); // true

// [Array] Copy a portion of an array into a new array
console.log([1, 2, 3, 4].slice(1, 3)); // [2, 3]

// [Array] Copy a portion of an array into itself
console.log([1, 2, 3, 4].copyWithin(0, 2)); // [3, 4, 3, 4]
