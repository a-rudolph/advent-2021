const input = require("./input");

const getDiff = (action, aim) => {
  const [dir, str] = action.split(" ");

  const n = Number(str);

  switch (dir) {
    case "forward":
      return [n, aim * n, 0];
    case "up":
      return [0, 0, -n];
    case "down":
      return [0, 0, n];
  }
};

const splitInput = (input) => input.split("\n");

const solution = (input) => {
  const split = splitInput(input);

  let position = [0, 0, 0];

  split.forEach((action) => {
    let [x1, y1, aim1] = position;

    let [x, y, aim] = getDiff(action, aim1);

    position = [x1 + x, y1 + y, aim1 + aim];
  });

  return position[0] * position[1];
};

console.log(solution(input));

module.exports = {
  solution,
};
