function toWeirdCase(string) {
  var words = string.split(" ");
  var resultWords = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var newWord = "";
    for (var j = 0; j < word.length; j++) {
      if (j % 2 === 0) {
        newWord = newWord + word[j].toUpperCase();
      } else {
        newWord = newWord + word[j].toLowerCase();
      }
    }
    resultWords.push(newWord);
  }
  return resultWords.join(" ");
}