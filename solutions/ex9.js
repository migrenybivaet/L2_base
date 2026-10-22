function solution(str) {
  var result = [];
  for (var i = 0; i < str.length; i = i + 2) {
    var firstChar = str[i];
    var secondChar = str[i + 1];
    if (secondChar === undefined) {
      secondChar = "_";
    }
    result.push(firstChar + secondChar);
  }
  return result;
}