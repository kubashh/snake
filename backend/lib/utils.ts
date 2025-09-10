import { apples, boardSize, colorHash, snakes } from "./consts"

export function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

function randPos(a = 0) {
  return randInt(a, boardSize - a) * 256 + randInt(a, boardSize - a)
}

function randHex() {
  const n = randInt(0, 16)
  return n < 10 ? n.toString() : String.fromCharCode(65 - 10 + n)
}

export function chance(a: number) {
  return Math.random() < a
}

export function isFreePos(pos: number) {
  if (apples[pos]) return false

  for (const snake of snakes) {
    for (const pos2 of snake.body) {
      if (pos2 === pos) return false
    }
  }

  return true
}

export function freePos(a = 0) {
  let pos = randPos(a)

  while (!isFreePos(pos)) {
    pos = randPos(a)
  }

  return pos
}

const generateAppleCh = boardSize ** 2 * 0.00004
export function generateApple() {
  if (chance(generateAppleCh) && Object.keys(apples).length < boardSize / 6) apples[freePos(3)] = true
}

export function createColor() {
  const color = `${colorHash}${randHex()}${randHex()}${randHex()}`

  if (snakes.find((snake) => snake.color === color)) return createColor()

  return color
}

export function encode(n: number) {
  return String.fromCharCode(n)
}
