function repeat(str, count) {
  if (!Number.isInteger(count) || count < 0) {
    throw new Error("Count must be a valid number");
  }
  return str.repeat(count);
}

module.exports = repeat;
