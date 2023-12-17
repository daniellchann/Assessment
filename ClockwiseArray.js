function arrangeClockwise(array) {
  //Initialize empty array for final result
  const result = [];

  while (array.length > 0) {
    // Top row iteration
    result.push(...array.shift());

    // Right column iteration
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }

    // Bottom row iteration (in reverse order)
    if (array.length > 0) {
      result.push(...array.pop().reverse());
    }

    // Left column iteration (in reverse order)
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }

  return result;
}

const array = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

console.log(arrangeClockwise(array));
