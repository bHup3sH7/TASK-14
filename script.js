const n = 7;

//1. Sum of n upto n
let sumN = 0;
for (let i = 1; i <= n; i++) {
  sumN += i;
}
console.log(`1.Sum of first ${n} numbers = ${sumN}`);

//2. Multiplication Table of The Number
console.log(`2. Table for ${n} are:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${n} X ${i} = ${n * i} `);
}

//3. Prime Number Or Not
let primeN = true;
if (n < 2) {
  primeN = false;
} else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      primeN = false;
      break;
    }
  }
}
if (primeN) {
  console.log(`3. ${n} is a PRIME number`);
} else {
  console.log(`3. ${n} is NOT a PRIME number`);
}

//4. Print All Factors Of N
console.log(`4. Factors Of Number ${n} are:`);
let factors = "";
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    factors += i + "";
    console.log(`Factors: ${i}`);
  }
}

//5. Sum Of All Digits
let dSum = 0;
let digit = n;
while (digit > 0) {
  let lDigit = digit % 10;
  digit = (digit - lDigit) / 10;
  dSum += lDigit;
}
console.log(`5. Sum of digits of ${n} = ${dSum}`);

//6. Armstrong Number Or Not
// Step 1
let dCount = 0;
let Count = n;

while (Count > 0) {
  dCount++;
  Count = (Count - (Count % 10)) / 10;
}
// Step 2
function Power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}
// Step 3
let aSum = 0;
let Arm = n;

while (Arm > 0) {
  let digit = Arm % 10;
  aSum += Power(digit, dCount);
  Arm = (Arm - digit) / 10;
}
if (aSum === n) {
  console.log(`6. ${n} IS an Armstrong number (digit count: ${dCount})`);
} else {
  console.log(`6. ${n} is NOT an Armstrong number (Armstrong sum = ${aSum})`);
}