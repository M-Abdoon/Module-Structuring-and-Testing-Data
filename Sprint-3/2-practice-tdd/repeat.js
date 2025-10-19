function repeat(str, count) {
  if (typeof count !== "number" || isNaN(count) || count < 0) {
    throw new Error("Count must be a valid number");
  }
  return str.repeat(count);
}

module.exports = repeat;
