const fs = require("fs");

const extractCalibrationValue = (line) => {
  const firstDigitMatch = line.match(/\d/);
  const lastDigitMatch = line.match(/\d(?=[^\d]*$)/);

  if (!firstDigitMatch || !lastDigitMatch) {
    return 0;
  }

  const firstDigit = firstDigitMatch[0];
  const lastDigit = lastDigitMatch[0];
  return parseInt(firstDigit + lastDigit, 10);
};

const calculateSumOfCalibrationValues = (filePath) => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const lines = fileContent.split("\n");

  const validLines = lines.filter((line) => line.trim() !== "");

  return validLines.reduce(
    (sum, line) => sum + extractCalibrationValue(line),
    0
  );
};

const sum = calculateSumOfCalibrationValues("./input.txt");
console.log(sum);
