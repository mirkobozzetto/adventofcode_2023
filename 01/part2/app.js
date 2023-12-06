const fs = require("fs");

const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const number = (str) => {
  if (str.charAt(0) > "0" && str.charAt(0) <= "9") {
    return parseInt(str.charAt(0));
  }
  const i = numbers.findIndex((n) => str.startsWith(n));
  return i < 0 ? null : i + 1;
};

const findDigits = (line) => {
  let first, last;
  for (let i = 0; i < line.length; i++) {
    const n = number(line.substring(i));
    if (n !== null) {
      first = first === undefined ? n : first;
      last = n;
    }
  }
  return [first, last];
};

try {
  const lineToCalibrationValueB = (line) => {
    const digits = findDigits(line);

    if (digits[0] == null || digits[1] == null) {
      return 0;
    }

    return parseInt(digits.join(""));
  };

  const linesB = fs.readFileSync("./input.txt", "utf-8").split("\n");
  const sum = linesB.map(lineToCalibrationValueB).reduce((a, b) => a + b, 0);
  console.log(`day1 part b: ${sum}`);
} catch (error) {
  console.error(error);
}
