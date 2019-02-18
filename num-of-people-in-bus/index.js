// Bus stops is a list of arrays
// Each bus stop has two values (eg: [10, 5])
// The first value is how many people get on the bus
// The second value is how many peolpe get off the bus
// Final calculation is the final number of people on the bus after the last stop

var number = function(busStops) {
  let total = 0;
  busStops.forEach(stop => {
    total += stop[0] - stop[1];
  });
  // for (i = 0; i < busStops.length; i++) {
  //   let on = busStops[i][0];
  //   let off = busStops[i][1];
  //   total = total + on - off;
  // }
  console.log(total);
  return total;
};

number([[10, 0], [3, 5], [5, 8]]);

module.exports = number;
