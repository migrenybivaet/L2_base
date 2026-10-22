Array.prototype.square = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    result.push(this[i] * this[i]);
  }
  return result;
};
Array.prototype.cube = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    result.push(this[i] * this[i] * this[i]);
  }
  return result;
};
Array.prototype.average = function() {
  if (this.length === 0) {
    return NaN;
  }
  var total = 0;
  for (var i = 0; i < this.length; i++) {
    total = total + this[i];
  }
  return total / this.length;
};
Array.prototype.sum = function() {
  var total = 0;
  for (var i = 0; i < this.length; i++) {
    total = total + this[i];
  }
  return total;
};
Array.prototype.even = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 === 0) {
      result.push(this[i]);
    }
  }
  return result;
};
Array.prototype.odd = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 !== 0) {
      result.push(this[i]);
    }
  }
  return result;
};