import { chance, randInt } from "./math.js"

export const boardSize = 24
export const appleColor = `yellow`
export const board = []
export const snakes = []
export const apples = []

export const freePos = (a = 0) => {
  let pos = { x: randInt(a, boardSize - a), y: randInt(a, boardSize - a) }

  let b = true
  while(b) {
    b = false
    for(const { body } of snakes) {
      for(const { x, y } of body) {
        if(pos.x == x && pos.y == y) {
          pos = {
            x: randInt(a, boardSize - a),
            y: randInt(a, boardSize - a)
          }
          b = true
        }
      }
    }

    for(const { x, y } of apples) {
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
      apples.push(freePos(2))
    }
  }
}

export const clearBoard = () => {
  board.length = 0
}