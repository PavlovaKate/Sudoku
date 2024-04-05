// Используйте для решения судоку необходимые функции из файла sudoku.js
const { solve, read } = require('./sudoku');

const allSudokus = read();
allSudokus.forEach((sudoku) => {
  console.table(sudoku);
  console.table(solve(sudoku));
});
