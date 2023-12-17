function nextBiggerNum(num) {
  // Convert the number to an array of digits
  let digits = num.toString().split('').map(Number);

  // Find the rightmost digit that is smaller than the digit to its right
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  // If no such digit is found, the number is already the largest possible
  if (i === -1) {
    return null;
  }

  // Find the smallest digit to the right of i that is larger than digits[i]
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  // Swap the found digits
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Sort the digits to the right of i in ascending order
  let sortedRight = digits.slice(i + 1).sort((a, b) => a - b);

  // Concatenate the digits to get the next bigger number
  let result = parseInt(
    digits
      .slice(0, i + 1)
      .concat(sortedRight)
      .join(''),
    10
  );

  return result;
}

console.log(nextBiggerNum(2017));
