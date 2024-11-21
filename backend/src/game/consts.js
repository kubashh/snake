import { chance, randInt } from "./math.js"

const initBoard = () => {
  board.length = 0

  for(let i = 0; i < boardSize; i++) {
    const array2 = []
    for(let j = 0; j < boardSize; j++) {
      array2.push(`#000000`)
    }

    board.push(array2)
  }
}

export const board = initBoard()
export const boardSize = 20
export const appleColor = `yellow`
export const snakes = []
export const apples = []

export const freePos = (a = 0) => {
  let pos = { x: randInt(a, boardSize - a), y: randInt(a, boardSize - a) }
  
  let b = true
  while(b) {
    b = false
    for(let snake of snakes) {
      for(let snakebody of snake.body) {
        if(pos.x == snakebody.x && pos.y == snakebody.y) {
          pos = { x: randInt(a, boardSize - a), y: randInt(a, boardSize - a) }
          b = true
        }
      }
    }
    for(let { x, y } of apples) {
      if(pos.x == x && pos.y == y) {
        pos = { x: randInt(a, boardSize - a), y: randInt(a, boardSize - a) }
        b = true
      }
    }
  }

  return pos
}

export const generateApple = () => {
  if(chance(0.06)) {
    if(apples.length < boardSize / 6) {
      apples.push(freePos(3))
    }
  }
}

export const clearBoard = () => {
  for(let i = 0; i < boardSize; i++) {
    for(let j = 0; j < boardSize; j++) {
      board[i][j] = `#000000`
    }
  }
}