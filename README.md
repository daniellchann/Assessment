# Assessment

## Question 1 - Finding the Next Bigger Number

### Description

Given a number, the task is to find the next bigger number using the same digits.

### Solution

The solution, implemented in JavaScript, converts the number into an array of digits. It then iterates through the array to find the rightmost digit that is smaller than the digit to its right. The algorithm swaps and sorts the digits accordingly, providing the next bigger number using the same digits.

Below are step by step explanation of how the algorithm works:

1. **Convert Input to Array of Digits:**

- The input number is first converted into an array of individual digits. The purpose of this is to
  make it easier to work with the digits.

2. **Find Rightmost Smaller Digit:**

- Here, the algorithm attempts to find the rightmost digit that is smaller to its number on the right.
  When its found, it marks the point where the rearrangement withh occur.

3. **Swap and Sort:**

- Once the smaller rightmost digit is found, the algorithm will look for the smallest digit to the right
  that is larger than it. These two digits are then swapped.

3. **Concatenate and Return:**

- This step revolves around concatenating all of the digits and return the final result.

### Reasoning

The approach utilised to tackle this challenge leverages basic array manipulation and iteration. Thus, it is not too complex and can be easily understood. It is also solved in a clear and step-by-step manner.

### Potential Improvements

Currently, the provided solution only supports integer as input and does not have any validation for inputs of various types such as char or string. Therefore, this could lead to unhandled errors and crashes when the input types are of those which are not supported. Further improvements would include input type validation and error handling.

Adding on, as this solution involves sorting, this might lead to performance issues for when the numbers or dataset are large.

## Question 2 - Traversing Array Elements in Clockwise Order

### Description

Given an n x n array, the challenge is to traverse through the array in a clockwise manner, from the outermost to the middle element. Then, the elements within the array are sorted and returned in that order.

### Solution

The solution, implemented in JavaScript, iterates over the outermost layer of the 2D array in a clockwise manner. It pushes the elements into a result array, effectively arranging them from outermost to the middle element.

1. **Outermost Layer Traversal:**

- A while loop is used to iterate the outermost layer of the array.

2. **Top Row:**

- For each iteration, array.shift() is used to push the top row of the array into the result array.

3. **Right Column:**

- The for loop method is used to iterate over the remaining rows of the layers and pops the last elements
  for each row.

4. **Bottom Row (In Reverse):**

- Array.pop() is used to remove and return the last row of current layer, and the reverse() method is
  applied to reverse the order of the elements.

5. **Left Column (In Reverse):**

- For loop is used to iterate over the remaining rows of current layer and shift() method is applied to
  return the first element of each row.

6. **Repeat Until No Layers Left:**

- Entire process is repeated until there is nothing left to traverse.

### Reasoning

By utilising while loop, it makes it easier to handle iteration over all of the layers until there are no more layers left in the array.

### Potential Improvements

The current solution only accepts 2D array as a valid input. There are no validations and error handling for other input types, thus might cause the system crash. Therefore, error handling should be implemented to ensure that the input is a valid 2D array for better user experience.
