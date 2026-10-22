function primeFactors(n) {
  var result = "";
  var div = 2;
  while (n > 1) {
    var count = 0;
    while (n % div === 0) {
      n = n / div;
      count = count + 1;
    }
    if (count > 0) {
      if (count === 1) {
        result = result + "(" + div + ")";
      } else {
        result = result + "(" + div + "**" + count + ")";
      }
    }
    div = div + 1;
  }
  return result;
}