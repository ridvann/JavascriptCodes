function nestedObjectCheck(obj /*, level1, level2, ... levelN*/) {
  var args = Array.prototype.slice.call(arguments, 1);

  for (var i = 0; i < args.length; i++) {
    if (!obj || !obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
}

var test = {level1:{level2:{level3:'level3'}} };

nestedObjectCheck(test, 'level1', 'level2', 'level3'); // true
nestedObjectCheck(test, 'level1', 'level2', 'foo'); // false