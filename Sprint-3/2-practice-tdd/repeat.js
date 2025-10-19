function repeat(str, count) {
  if(count < 0) {
    return false;
  }
  return str.repeat(count);
}

module.exports = repeat;
