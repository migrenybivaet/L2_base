function longest(arr, n) {
  var sorted = [];
  for (var i = 0; i < arr.length; i++) {
    sorted.push({ text: arr[i], index: i });
  }
  sorted.sort(function(a, b) {
    if (a.text.length !== b.text.length) {
      return b.text.length - a.text.length;
    } 
    else {
      return a.index - b.index;
    }
  });
  return sorted[n - 1].text;
}