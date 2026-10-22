function hexStringToRGB(hexString) {
  var r = hexString.slice(1, 3);
  var g = hexString.slice(3, 5);
  var b = hexString.slice(5, 7);
  return {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16)
  };
}