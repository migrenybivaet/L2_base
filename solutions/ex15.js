function howManyTimes(time1, time2) {
  var start = new Date(time1.replace(" ", "T") + "Z").getTime();
  var end = new Date(time2.replace(" ", "T") + "Z").getTime();
  var startSec = start / 1000;
  var endSec = end / 1000;
  var count = 0;
  for (var i = startSec; i < endSec; i++) {
    var date = new Date(i * 1000);
    var h = date.getUTCHours();
    var m = date.getUTCMinutes();
    var s = date.getUTCSeconds();
    var h12 = h % 12;
    if (h12 === 0) {
      h12 = 12;
    }
    if (m === 0) {
      if (s < h12) {
        count = count + 1;
      }
    } else if (m === 30) {
      if (s === 0) {
        count = count + 1;
      }
    }
  }
  return count;
}