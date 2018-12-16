function isIsogram(str) {
  if (str.length === 0) return true;
  else {
    arr = str.toLowerCase().split("");
    let unique_array = [];
    for (let i = 0; i < arr.length; i++) {
      if (unique_array.indexOf(arr[i]) == -1) {
        unique_array.push(arr[i]);
      }
    }
    return unique_array.length >= arr.length;
  }
}

module.exports = isIsogram;
