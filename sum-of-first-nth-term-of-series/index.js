function SeriesSum(n) {
  // Series will be something like this: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
  // The second place is n*2
  // Every place after the second is (n*2)+(n-2) I think?
  switch (n) {
    case 0:
      return "0.00";
    case 1:
      return "1.00";
  }
  for (i = 1; i < n; i++) {}
}

module.exports = SeriesSum;
