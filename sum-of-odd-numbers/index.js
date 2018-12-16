function rowSumOddNumbers(n) {
  // calculate "row" of odd nums in triangle
  // triangele breakdown is as follows:
  // row length = row index
  // each number = ((triangle index * 2)-1)
  // return sum of nums in row
  // So... basically.. you're cubing the "row" number
  return n * n * n;
}

module.exports = rowSumOddNumbers;
