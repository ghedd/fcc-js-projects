function palindrome(str) {
  // create regex pattern that accepts
  // numbers, letters and some special char
  let normalizer = /[a-z0-9]|[#*]/gi;

  // retrieve an array of chars from input
  let normalizedStrArr = str.match(normalizer);

  // create a nomolized string to compare later on
  let normalizedStr = normalizedStrArr.join("").toLowerCase();
  // console.log(normalizedStr)

  let reversedStr = "";
  // console.log(normalizedStrArr)

  // pop each item from the array,
  // then put them together to create reversed string
  // (last array item becomes first letter of the string)
  while (normalizedStrArr.length > 0) {
    reversedStr += normalizedStrArr.pop().match(normalizer);
  }
  // console.log(reversedStr.toLowerCase())

  // return final result
  return reversedStr.toLowerCase() === normalizedStr ? true : false;
}

console.log(palindrome("raceCAR"));
