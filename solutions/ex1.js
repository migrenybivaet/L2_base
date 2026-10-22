function hasTwoCubeSums(n) {
  let sums = {};
  for (let a = 1; a * a * a < n; a++) {
    for (let b = a + 1; a * a * a + b * b * b <= n; b++) {
      let sum = a * a * a + b * b * b;
      if (sum === n) {
        if (!sums[sum]) {
          sums[sum] = [];
        }
        sums[sum].push([a, b]);
        if (sums[sum].length === 2) {
          let pair1 = sums[sum][0];
          let pair2 = sums[sum][1];
          if (pair1[0] !== pair2[0] && pair1[1] !== pair2[0] && 
              pair1[0] !== pair2[1] && pair1[1] !== pair2[1]) {
            return true;
          }
        }
      }
    }
  }
  return false;
}