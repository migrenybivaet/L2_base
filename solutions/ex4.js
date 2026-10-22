function findMissing(list) {
  var diff = list[1] - list[0];
  if (diff > list[2] - list[1]) {
    return list[0] + (list[2] - list[1]);
  }
  for (var i = 0; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] !== diff) {
      return list[i] + diff;
    }
  }
}