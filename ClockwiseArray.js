function arrange(array) {
  const result = [];

  while (array.length > 0) {
    // Top row
    result.push(...array.shift());

    // Right column
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }

    // Bottom row (in reverse order)
    if (array.length > 0) {
      result.push(...array.pop().reverse());
    }

    // Left column (in reverse order)
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }

  return result;
}

// Example
const array = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

console.log(arrange(array)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
