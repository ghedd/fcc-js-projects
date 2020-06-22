const telephoneCheck = (str) => {
  let validNum = /^1{0,1}[ -]{0,1}(\d{3}|([(]\d{3}[)]))[ -]{0,1}(\d{3})[ -]{0,1}(\d{4})$/g;
  // ^1{0,1}: begin with 1 only, or none
  // [ -]{0,1}: optional spacing with white space or hyphen
  // () : grab the whole pattern inside; if a single pattern
  // inside parentheses is not matched, it returns false
  // [(]\d{3}[)]: any 3-degit number that is inside "()"
  // (\d{4})$ : the number w. 4 digits must be the last group
  let result = validNum.test(str);
  console.log(result);
  return result;
};
