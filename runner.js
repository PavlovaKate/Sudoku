// Используйте для решения судоку необходимые функции из файла sudoku.js
const { solve, read, prettyBoard } = require('./sudoku');

const allSudokus = read();
allSudokus.forEach((sudoku) => {
  console.table(sudoku);
  con
  setTimeout(() => {
    console.table(sudoku);
    setTimeout(() => {
      console.clear();
      prettyBoard(solve(sudoku));
    }, 1000);
  }, 2000);

  // solve(sudoku);
});
