const rot13 = (str) => {
  // step 1:
  // convert string to char code
  // skip elements that are not letters
  // result:
  // an array of dec number
  // & some unalphabetical chars
  let notAlphabet = /[^A-Z]/;
  const START_CHAR = 65;
  const END_CHAR = 91;
  const CIPHER = 13;

  let strArr = str.split("").map((item) => {
    // step 2:
    // add cipher to each item of the arr
    // if item + 13 >= 91 -> new item starts counting
    // again from 65:
    //  newItem = 65 + ((item + cipher) - end char)
    // unalphabetical chars remain intact
    let newItem;

    if (notAlphabet.test(item)) {
      newItem = item;
    } else {
      newItem = item.charCodeAt();
      if (newItem + CIPHER >= END_CHAR) {
        newItem = START_CHAR + (newItem + CIPHER - END_CHAR);
      } else {
        newItem = newItem + CIPHER;
      }
    }
    return newItem;
  });

  // step 3:
  // convert numbers form new arr to char
  // export to string
  let newArr = strArr.map((item) => {
    return Number.isInteger(item) ? String.fromCharCode(item) : item;
  });
  return newArr.join("");
};
console.log(rot13("SERR YBIR?"));
