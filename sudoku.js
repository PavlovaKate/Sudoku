/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
function read() {
  const fs = require('fs');
  const path = require('path');
  const { EOL } = require('os');

  const allData = fs
    .readFileSync(`${path.join(__dirname)}/puzzles.txt`, 'utf-8')
    .trim()
    .split(EOL)
    .map((el) => el.match(/.{9}/g).map((el) => el.match(/./g)));

  return allData;
}

function solve(board) {
  const position = findEmpty(board);
  if (position === null) return true;
  const [row, col] = position;

  for (let i = 1; i <= 9; i += 1) {
    const iToString = String(i);
    board[row][col] = iToString;
    if (isValide(board, row, col, iToString)) {
      if (solve(board)) return board;
    }
    board[row][col] = '-';
  }
  return false;
}

// function isSolved() {
// }

function prettyBoard(board) {
  setTimeout(() => {
    console.clear();
    console.table(board);
  }, 1000);
}

function findEmpty(board) {
  for (let row = 0; row < 9; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      if (board[row][col] === '-') {
        return [row, col];
      }
    }
  }
  return null;
}

function isValide(arr, row, col, numb) {
  for (let i = 0; i < 9; i += 1) {
    if (arr[row][i] === numb && i !== col) {
      return false;
    }
  }

  for (let i = 0; i < 9; i += 1) {
    if (arr[i][col] === numb && i !== row) {
      return false;
    }
  }

  const x = Math.floor(row / 3) * 3;
  const y = Math.floor(col / 3) * 3;

  for (let i = x; i < x + 3; i += 1) {
    for (let j = y; j < y + 3; j += 1) {
      if (arr[i][j] === numb && i !== row && j !== col) {
        return false;
      }
    }
  }

  return true;
}

module.exports = { solve, read };
