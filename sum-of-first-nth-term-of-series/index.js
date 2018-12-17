function SeriesSum(n) {
  // Series will be something like this: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
  // The second place is n*2
  // Every place after the second is 1/(n*2)+(n-2) I think?

  // my solution
  switch (n) {
    case 0:
      return "0.00";
    case 1:
      return "1.00";
  }
  let total = 1;
  for (let i = 1; i <= n; i++) {
    let frac = 0.0;
    if (i == 1) {
      continue;
    }
    if (i == 2) {
      frac = 1 / 4;
    } else {
      frac = 1 / (i * 2 + (i - 2));
    }
    total += frac;
  }
  return total.toFixed(2);

  // best solution
  //   for (var s = 0, i = 0; i < n; i++) {
  //     s += 1 / (1 + i * 3)
  //   }

  //   return s.toFixed(2)
}

module.exports = SeriesSum;
