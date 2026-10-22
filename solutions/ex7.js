function wave(str) {
  var result = [];
  if (str === "") {
    return result;
  }
  for (var i = 0; i < str.length; i++) {
    var currentChar = str[i];
    if (currentChar !== " ") {
      var waveWord = str.slice(0, i) + currentChar.toUpperCase() + str.slice(i + 1);
      result.push(waveWord);
    }
  }
  return result;
}