function expandedForm(num) {
  var str = String(num);
  var result = [];
  for (var i = 0; i < str.length; i++) {
    var digit = str[i];
    if (digit !== "0") {
      var zerosCount = str.length - 1 - i;
      var zeroString = "";
      for (var j = 0; j < zerosCount; j++) {
        zeroString = zeroString + "0";
      }
      result.push(digit + zeroString);
    }
  }
  return result.join(" + ");
}