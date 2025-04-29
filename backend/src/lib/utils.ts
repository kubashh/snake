import { apples, boardSize, snakes } from "./consts.js"

export const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min)

const toHex = (n: number) => {
  if (n < 10) return n.toString()

  return String.fromCharCode(65 - 10 + n)
}

export const chance = (a: number) => Math.random() < a

export const freePos = (a = 0) => {
  let pos = { x: randInt(a, boardSize - a), y: randInt(a, boardSize - a) }

  let b = true
  while (b) {
    b = false
    for (const { body } of snakes) {
      for (const { x, y } of body) {
        if (pos.x == x && pos.y == y) {
          pos = {
            x: randInt(a, boardSize - a),
            y: randInt(a, boardSize - a),
          }
          b = true
        }
      }
    }

    for (const { x, y } of apples) {
      if (pos.x == x && pos.y == y) {
        pos = { x: randInt(a, boardSize - a), y: randInt(a, boardSize - a) }
        b = true
      }
    }
  }

  return pos
}

export const generateApple = () =>
  chance(0.06) && apples.length < boardSize / 6 && apples.push(freePos(2))

export const createColor = (): string => {
  const color = `#${toHex(randInt(0, 16))}${toHex(randInt(0, 16))}${toHex(
    randInt(0, 16)
  )}`

  for (const snake of snakes) {
    if (snake.color === color) return createColor()
  }

  return color
}
