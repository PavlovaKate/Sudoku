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

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard(board) {
  setTimeout(() => {
    console.clear();
    console.table(board);
  }, 2000);
}
const board= read()[0]
function findEmpty(board) {
    for( let row=0; row<=9; row++){
    for( let col=0; col<=9; col++){
       if(board[row][col]==="-"){
         return [row, col];
     }
   }
  }
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
