function hasTargetSum(array, target) {
  // Create a set to store numbers we've seen
  const seenNumbers = new Set();

  for (let num of array) {
    // Check if the complement (target - num) is in the set
    if (seenNumbers.has(target - num)) {
      return true;
    }
    // Add the current number to the set
    seenNumbers.add(num);
  }

  return false;
}

/* 
  Pseudocode:
  1. Create an empty set to store seen numbers.
  2. Loop through each number in the array.
  3. Calculate the complement (target - current number).
  4. If the complement exists in the set, return true.
  5. Otherwise, add the current number to the set.
  6. If no pairs add up to the target, return false.
*/

/*
  Explanation:
  The function checks if any two numbers in the array add up to the target. 
  Instead of using nested loops (O(n²) time complexity), it uses a Set to store seen numbers. 
  This allows checking for the complement in O(1) time, making the solution O(n) in time complexity.
*/

// You can run `node index.js` to test
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
}

module.exports = hasTargetSum;
