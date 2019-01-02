module.exports = string => {
  // Regex to match all unique alphabet characters (only matches if not already found)
  let reg = /([a-z])(?!.*\1)/g;
  // Converts string to Lowercase then checks if the length = 26 (length of alphabet)
  return string.toLowerCase().match(reg).length === 26;
};
