module.exports = function titleCase(title, minorWords) {
  title = title.toLowerCase().split(" ");
  newTitle = [];
  let noMinorWords = () => {
    title.map(word => {
      word = word.charAt(0).toUpperCase() + word.slice(1);
      newTitle.push(word);
    });
    return newTitle.join(" ");
  };
  let containsMinorWords = () => {
    minorWords = minorWords.toLowerCase().split(" ");
    title.map((word, index) => {
      if (index === 0 || !minorWords.includes(word)) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        newTitle.push(word);
      } else if (minorWords.includes(word)) {
        newTitle.push(word);
      }
    });

    return newTitle.join(" ");
  };
  return minorWords ? containsMinorWords() : noMinorWords();
};
