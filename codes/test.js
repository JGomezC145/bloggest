function addzero(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function zero(i) {
  var numer = i;
  var result;
  if (i.length === 1) {
    result = "0" + i;
  } else {
    result = i;
  }
  return result;
}
