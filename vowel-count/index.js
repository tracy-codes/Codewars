// returns number of vowels found with Regex

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

module.exports = { getCount };
