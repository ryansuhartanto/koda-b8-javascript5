/**
 * Check every items in array whether it's even or odd.
 * @param {number[]} arr
 * @param {"even"|"odd"} str
 */
function arrEvenOdd(arr, str) {
	const checkEven = str === "even";
	const checkOdd = str === "odd";

	return arr.filter((num) => {
		const condition = num % 2 === 0;
		return (checkEven && condition) || (checkOdd && !condition);
	});
}

const ARRAY = [6, 7, 13, 22, 23, 29, 30];
console.log(arrEvenOdd(ARRAY, "even"));
console.log(arrEvenOdd(ARRAY, "odd"));
