## My Solutions for FreeCodeCamps JS Data Structure & Algorithm Projects

After fishing all of these projects, I created this repo to showcase my code base.
Check out this [link](https://www.freecodecamp.org/certification/thinhle-eddie/javascript-algorithms-and-data-structures) for viewing my certificate.

### Overview of the five projects

1. Palindrome Checker

- Objective: Return true if the given string is a palindrome. Otherwise, return false.
- Note: A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

2. Roman Numeral Converter

- Objective: Convert the given number into a roman numeral.
- Note: All roman numerals answers should be provided in upper-case.

3. Caesars Cipher

- Objective: Write a function which takes a [ROT13](https://en.wikipedia.org/wiki/ROT13) encoded string as input and returns a decoded string.

-Note: All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

4. Telephone Number Validator

- Descriptions: The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

      >555-555-5555
      >(555)555-5555
      >(555) 555-5555
      >555 555 5555
      >5555555555
      >1 555 555 5555

- Objective:
  - Validate or reject the US phone number based on any combination of the formats provided above.
  - The area code is required.
  - If the country code is provided, it's a must to confirm that the country code is 1. Return `true` if the string is a valid US phone number; otherwise return `false`.

5. Cash Register

- Objective: Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

- Note:

  - cid is a 2D array listing available currency.
  - The checkCashRegister() function should always return an object with a status key and a change key.
  - Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if exact change cannot be returned.
  - Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key change if it is equal to the change due.
  - Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
  - Currency Unit Amount

    - Penny \$0.01 (PENNY)
    - Nickel \$0.05 (NICKEL)
    - Dime \$0.1 (DIME)
    - Quarter \$0.25 (QUARTER)
    - Dollar \$1 (ONE)
    - Five Dollars \$5 (FIVE)
    - Ten Dollars \$10 (TEN)
    - Twenty Dollars \$20 (TWENTY)
    - One-hundred Dollars \$100 (ONE HUNDRED)
