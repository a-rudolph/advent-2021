import puzzle_input
import numpy as np

def main():
  split_input = puzzle_input.input.split("\n")

  split_input = [[int(n) for n in list(i)] for i in split_input]

  sum = None
  
  for arr in split_input:
    if sum is None:
      sum = arr
      continue

    sum = np.add(sum, arr)

  print(sum)

  total = len(split_input)

  averages = np.divide(sum, total)

  most_common = np.where(averages > .5, 1, 0)
  least_common = np.where(most_common == 1, 0, 1)

  print(most_common)
  print(least_common)

  x = int('110101101101', 2)
  y = int('001010010010', 2)

  print(x * y)


main()
