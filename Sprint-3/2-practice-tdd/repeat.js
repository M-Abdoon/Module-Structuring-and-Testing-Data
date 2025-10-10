function repeat(str, count) {
  if(count < 0) {
    return "Error: Negative counts are not valid.";
  }
  return str.repeat(count);
}

module.exports = repeat;
