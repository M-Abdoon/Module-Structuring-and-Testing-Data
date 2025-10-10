function countChar(stringOfCharacters, findCharacter) {
  let output = 0;
  for( let i=0; i <= stringOfCharacters.length; i++ ) {
    if(stringOfCharacters[i] === findCharacter)
      output++;
  }
  return output;
}

module.exports = countChar;
