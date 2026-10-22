function isCircleSorted( arr ) {
  var drops = 0;
  for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    var next = arr[(i + 1) % arr.length];
    if (current > next) {
      drops = drops + 1;
    }
  }
  if (drops <= 1) {
    return true;
  } else {
    return false;
  }
}