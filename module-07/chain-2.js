const data = [
  {
    isActive: false,
    values: [17, 16, 3, 15, 0, 0, 16, 16, 14, 0, 10, 0, 13, 10, 11, 1, 13, 9],
  },
  {
    isActive: false,
    values: [
      3, 5, 19, 11, 10, 7, 0, 3, 7, 8, 11, 11, 13, 4, 2, 3, 7, 1, 2, 12, 10, 22,
      15,
    ],
  },
  {
    isActive: false,
    values: [
      32, 28, 14, 9, 6, 8, 24, 14, 12, 17, 32, 24, 9, 33, 11, 26, 15, 29, 2, 18,
      25, 16, 6, 15, 35, 3, 14, 20, 13, 2, 29, 16, 26, 2, 3, 8, 8,
    ],
  },
  {
    isActive: true,
    values: [
      9, 18, 8, 8, 34, 29, 22, 8, 28, 8, 15, 29, 16, 5, 25, 33, 7, 9, 21, 5, 13,
      3, 10, 32, 0, 12, 27, 34, 29, 37, 40, 34, 1, 29, 2, 27, 20, 20, 13, 40,
      28,
    ],
  },
  {
    isActive: false,
    values: [
      19, 0, 31, 23, 8, 1, 29, 5, 19, 36, 12, 3, 3, 4, 30, 18, 10, 37, 0, 30, 3,
      29, 5, 13, 13, 7, 34, 30, 33, 2, 10, 22, 4, 16, 30, 35, 12, 18,
    ],
  },
  {
    isActive: true,
    values: [
      7, 21, 12, 18, 11, 23, 11, 28, 11, 19, 14, 2, 2, 20, 14, 3, 7, 6, 19, 27,
      14, 15, 5, 27, 26, 6, 14, 0, 19,
    ],
  },
  {
    isActive: false,
    values: [10, 6, 2, 11, 7, 10, 4, 3, 9, 2, 7, 2],
  },
  {
    isActive: true,
    values: [
      39, 25, 47, 69, 43, 15, 41, 64, 5, 23, 58, 51, 49, 41, 16, 73, 68, 23, 48,
      19, 62, 32, 37, 42, 0, 8, 47, 54, 22, 21, 10, 42, 46, 10, 33, 35, 12, 64,
      4, 13, 0, 2, 35, 36, 2, 40, 65, 39, 54, 77, 70, 50, 33, 5, 3, 21, 27, 61,
      44, 57, 76, 53, 74, 54, 69, 6, 71, 32, 51, 45, 65, 61, 33, 2, 3, 26, 55,
      56,
    ],
  },
  {
    isActive: true,
    values: [
      93, 13, 39, 16, 38, 14, 59, 24, 35, 32, 14, 25, 42, 51, 66, 56, 88, 56,
      72, 37, 18, 30, 11, 80, 45, 19, 94, 5, 37, 78, 69, 43, 58, 29, 10, 84, 11,
      73, 76, 31, 68, 39, 85, 28, 45, 29, 56, 3, 78, 75, 78, 30, 87, 0, 2, 71,
      73, 47, 60, 32, 54, 55, 82, 25, 68, 75, 77, 23, 7, 6, 45, 80, 37, 4, 11,
      74, 75, 48, 10, 60, 16, 9, 59, 78, 29, 18, 0, 80, 23, 60, 86, 6, 69, 78,
      60,
    ],
  },
  {
    isActive: true,
    values: [
      1, 41, 29, 34, 44, 19, 39, 14, 68, 58, 10, 86, 48, 37, 87, 37, 3, 72, 79,
      12, 18, 14, 34, 29, 5, 65, 70, 26, 89, 72, 77, 55, 67, 69, 82, 56, 13, 71,
      37, 17, 38, 54, 26, 56, 15, 24, 10, 47, 75, 69, 49, 26, 10, 87, 78, 83,
      35, 20, 84, 61, 81, 38, 79, 67, 35, 54, 32, 69, 46, 70, 11, 69, 58, 50,
      28, 20, 87, 32, 82, 48, 1, 24, 29, 7, 31, 51, 65, 78, 48, 10, 6, 3,
    ],
  },
  {
    isActive: false,
    values: [
      32, 6, 30, 39, 1, 2, 2, 40, 40, 26, 7, 11, 9, 48, 3, 29, 40, 24, 19, 31,
      37, 38, 39, 18, 8, 25, 22, 18, 45, 3, 44, 40, 38, 38, 48, 29, 47, 11, 34,
      45, 13, 16, 21, 39, 22, 46, 24, 2, 41,
    ],
  },
  {
    isActive: false,
    values: [
      46, 9, 27, 3, 6, 26, 41, 45, 10, 39, 32, 34, 33, 28, 34, 47, 8, 17, 31,
      43, 1, 11, 38, 16, 18, 5, 8, 48, 15, 35, 26, 4, 15, 38, 20, 44, 25, 34,
      12, 26, 5, 40, 28, 19, 35, 48, 10, 30, 26, 10,
    ],
  },
  {
    isActive: false,
    values: [
      60, 19, 27, 27, 44, 17, 43, 10, 10, 59, 12, 48, 5, 34, 37, 56, 48, 11, 6,
      35, 29, 15, 5, 34, 6, 17, 23, 16, 6, 48, 12, 41, 42, 0, 25, 26, 6, 4, 61,
      47, 54, 6, 60, 14, 55, 38, 54, 6, 26, 60, 14, 43, 23, 33, 2, 14, 47, 0,
      27, 44, 11, 33,
    ],
  },
  {
    isActive: false,
    values: [
      71, 39, 50, 22, 5, 56, 16, 31, 7, 64, 36, 43, 61, 33, 74, 6, 39, 57, 48,
      26, 3, 22, 44, 71, 13, 4, 26, 26, 43, 37, 2, 60, 37, 66, 45, 57, 31, 29,
      50, 50, 43, 43, 13, 22, 47, 73, 18, 71, 44, 47, 65, 57, 53, 14, 9, 40, 48,
      57, 58, 36, 26, 45, 44, 35, 28, 26, 46, 43, 13, 24, 39, 29, 21, 2, 19, 66,
    ],
  },
  {
    isActive: false,
    values: [
      60, 56, 26, 34, 64, 63, 7, 7, 60, 56, 24, 49, 24, 43, 45, 46, 50, 49, 45,
      30, 40, 8, 11, 32, 36, 55, 62, 11, 16, 60, 40, 3, 54, 30, 17, 39, 63, 12,
      47, 43, 38, 29, 53, 2, 0, 9, 21, 60, 17, 23, 27, 45, 13, 36, 48, 50, 53,
      2, 56, 5, 29, 36, 20, 8, 26,
    ],
  },
];

const active = data.filter((item) => item.isActive);

// const subTotals = active.map((item) =>
//   item.values.reduce((acc, value) => acc + value, 0)
// );

// console.log(subTotals);

// const total = subTotals.reduce((acc, value) => acc + value, 0);

// console.log(total);

// const values = active.map((item) => item.values).flat();

const values = active.flatMap((item) => item.values);

const total = values.reduce((acc, value) => acc + value, 0);

console.log(total);

const inlineTotal = data
  .filter((item) => item.isActive)
  .flatMap((item) => item.values)
  .reduce((acc, value) => acc + value, 0);

console.log(inlineTotal);
