//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function() {};

Year.prototype.isLeap = function(input) {
  if (input % 4 === 0) {
    return true
  }
  else {
    return false
  }

};

module.exports = Year;
