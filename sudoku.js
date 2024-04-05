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
