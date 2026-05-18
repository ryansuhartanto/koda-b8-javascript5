/**
 * Check every items in array whether it's even or odd.
 * @param {number[]} arr
 * @param {"even"|"odd"} str
 */
function arrEvenOdd(arr, str) {
	const checkEven = str === "even";
	const checkOdd = str === "odd";

	const result = [];

	for (const num of arr) {
		const condition = num % 2 === 0;
		if ((checkEven && condition) || (checkOdd && !condition)) {
			result[result.length] = num;
		}
	}

	return result;
}

const ARRAY = [6, 7, 13, 22, 23, 29, 30];
console.log(arrEvenOdd(ARRAY, "even"));
console.log(arrEvenOdd(ARRAY, "odd"));
