import info from "../info.json"
import { signal } from "./signals"
import { decodeToPos, render } from "./util"

export const data: DataType = {
  nick: ``,
  lastDirection: -1,
  ctx: null,
}

export const inGame = signal(false)

export const pixelSize = 40

export const boardSize = info.boardSize
export const appleColor = info.appleColor
export const colorHash = info.colorHash

export const socket = new WebSocket(`ws://${info.adress}`)

// Connect
socket.onopen = () => {
  inGame.value = false
}

// Disconnect
socket.onclose = () => {
  inGame.value = false
}

// Message
socket.onmessage = ({ data: dat }) => {
  switch (dat.at(0)) {
    case `n`: {
      return dat.length <= 1
        ? // Start game
          (inGame.value = true)
        : alert(dat.slice(1))
    }

    // Board
    case `b`: {
      if (!data.ctx?.canvas) return
      sendDirection = false

      let arr = dat.slice(1).split(colorHash)
      const arr1 = arr.at(0).split(``)
      const arr2 = arr.slice(1).reduce(
        (prev: string[], e: string) => [
          ...prev,
          `#${e.slice(0, 3)}`,
          ...e
            .slice(3)
            .split(``)
            .map((e) => e),
        ],
        []
      )
      arr = [...arr1, ...arr2]

      let [head, ...board] = arr.map((e: string) => (e.length === 1 ? decodeToPos(e) : e))

      render(head, board)
      break
    }
    case `e`: {
      inGame.value = false
    }
  }
}

// setup
data.nick = localStorage.getItem(`nick`) || ``

let sendDirection = false

// Events

// Resize
window.addEventListener(`resize`, () => {
  if (data.ctx) {
    data.ctx.canvas.width = window.innerWidth
    data.ctx.canvas.height = window.innerHeight
  }
})

// Direction
const directions: Record<string, number> = { w: 0, d: 1, s: 2, a: 3 }

document.addEventListener(`keydown`, ({ key }) => {
  if (!inGame.value || sendDirection) return
  sendDirection = true

  const direction = directions[key.toLowerCase()]

  if (direction === undefined) return
  if (data.lastDirection !== -1 && (data.lastDirection - direction) % 2 === 0) return

  data.lastDirection = direction
  socket.send(`d${direction}`)
})
