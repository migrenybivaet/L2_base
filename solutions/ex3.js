function whatCentury(year)
{
  var num = Number(year);
  var cent = Math.floor((num - 1) / 100) + 1;
  var lastDigit = cent % 10;
  var lastTwo = cent % 100;
  var suffix = "th";
  if (lastTwo !== 11 && lastTwo !== 12 && lastTwo !== 13) {
    if (lastDigit === 1) suffix = "st";
    if (lastDigit === 2) suffix = "nd";
    if (lastDigit === 3) suffix = "rd";
  }
  return cent + suffix;
}