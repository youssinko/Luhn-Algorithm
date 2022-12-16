const validate = (number) => {
  let sum = 0;

  let numdigits = number.length;

  let parity = numdigits % 2;

  for (let i = 0; i < numdigits; i++) {
    let digit = parseInt(number.charAt(i));

    if (i % 2 == parity) digit *= 2;
    // index+1 is even,double the value and it's more than 9 ,subtract by 9 (example instead of taking 16 and split it into 1 + 6 =7 , we can take 16 - 9 which will also result in 7)
    if (digit > 9) digit -= 9;

    sum += digit;
  }

  return sum % 10 == 0;
};

console.log(validate("1234567890123456"));
console.log(validate("4408041234567893"));
console.log(validate("38520000023237"));
console.log(validate("4222222222222"));
