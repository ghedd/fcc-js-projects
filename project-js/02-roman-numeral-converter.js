function convertToRoman(num) {
  let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let thousand = "M";

  let numArr =
    num >= 10
      ? num
          .toString()
          .split("")
          .map((item) => parseInt(item))
      : [];

  let romanArr = [];

  switch (numArr.length) {
    default:
      romanArr = ones[num];
      break;
    case 2:
      romanArr = tens[numArr[0]] + ones[numArr[1]];
      break;
    case 3:
      romanArr = hundreds[numArr[0]] + tens[numArr[1]] + ones[numArr[2]];
      break;
    case 4:
      let count = 0;
      let thousands = "";
      while (count < numArr[0]) {
        thousands += thousand;
        count++;
      }

      romanArr =
        thousands + hundreds[numArr[1]] + tens[numArr[2]] + ones[numArr[3]];
      break;
  }

  // console.log(numArr)
  // console.log(romanArr)
  return romanArr;
}

console.log(convertToRoman(3999));
