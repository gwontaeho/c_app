export const getMock = (number = 3) =>
  Array(number)
    .fill(null)
    .map((_, i) => String(i));
