const input = require("./input");

const splitInput = (n = input.length - 1) => {
  return input.split("\n").map(Number).slice(0, n);
};

const run = () => {
  const arr = splitInput();
  const sums = [];

  console.log(arr);

  let count = 0;
  let prev = 0;

  for (let i = 2; i < arr.length; i++) {
    const sum = arr[i] + arr[i - 1] + arr[i - 2];

    if (sum > prev) count++;

    sums.push(sum);
    prev = sum;
  }

  console.log(sums);
  console.log(count);
};

run();
