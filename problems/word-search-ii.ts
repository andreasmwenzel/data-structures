// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]
class ListNode {
  coordinate: number[];
  //visited: boolean = false;
  next: ListNode | undefined = undefined;
  constructor(data: number[]) {
    this.coordinate = data;
  }
}

function letterInRange(target: number[], previous: number[]): boolean{
  if (previous[0] === -1) return true;
  if (target[0] == previous[0]) {
    if (target[1] == previous[1] + 1 || target[1] == previous[1] - 1) return true;
  }
  if (target[1] == previous[1]) {
    if (target[0] == previous[0] + 1 || target[0] == previous[0] - 1) return true;
  }
  return false;
}



function instertLetterIntoMap(letter: string, i:number , j:number, map:Map<string, ListNode>) {
  let letterList = map.get(letter);
  if (letterList) {
    while (letterList.next) {
      letterList = letterList?.next;
    }
    letterList.next = new ListNode([i, j]);
    return;
  }
  map.set(letter, new ListNode([i,j]))
}

function canCompleteWord(word: string, board: string[][], coords: number[], current = 0): boolean {
  console.log(word, current, coords);
  if (current === word.length) return true;

  if (coords[0] === -1 || coords[0] === board.length || coords[1] === -1 || coords[2] === board[0].length) return false;

  if (board[coords[0]][coords[1]] === word[current]) {
    board[coords[0]][coords[1]] = '_';
    let res = (canCompleteWord(word, board, [coords[0], coords[1] + 1], current+1) ||
      canCompleteWord(word, board, [coords[0] + 1, coords[1]], current+1) ||
      canCompleteWord(word, board, [coords[0], coords[1] - 1], current+1) ||
      canCompleteWord(word, board, [coords[0] - 1, coords[1]], current+1)
    )
  
    board[coords[0]][coords[1]] = word[current];
    return res
  }

  return false;
}

function findWords(board: string[][], words: string[]): string[]{
  let foundWords: string[] = [];
  let boardMap = new Map<string, ListNode>();
  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board[i].length; j++){
      instertLetterIntoMap(board[i][j], i, j, boardMap);
    }
  }
  for (let word of words) {
    let firstChar = boardMap.get(word[0]);
    while (firstChar) {
      if (canCompleteWord(word, board, firstChar.coordinate)) {
        foundWords.push(word);
        break;
      }
      firstChar = firstChar.next;
    }
  }
  return foundWords;
}

let inputBoard =[["a","a"],["a","a"]]
// let inputBoard = [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]];
let inputWords = ["aaaaa"]
// let inputWords = ["oath", "pea", "eat", "rain"]

let outputWords = findWords(inputBoard, inputWords)

console.log(outputWords);