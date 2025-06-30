"use client"

import { io } from "socket.io-client"
import { colorHash, data } from "./consts"
import { render } from "./render"
import { decodeToPos } from "./util"

export const socket = io()

const setup = () => {
  data.nick = localStorage.getItem(`nick`)! || ``

  let sendDirection = false

  // Socket

  // Connect
  socket.on(`connect`, () => data.setInGame?.(false))

  // Disconnect
  socket.on(`disconnect`, () => data.setInGame?.(false))

  // New
  socket.on(`new`, ({ success, message }: NewType) => {
    success
      ? // Start game
        data.setInGame?.(true)
      : alert(message)
  })

  // End
  socket.on(`end`, () => data.setInGame?.(false))

  // Board
  socket.on(`board`, (dataFromBackend: any) => {
    if (!data.ctx?.canvas) return
    sendDirection = false

    let arr = dataFromBackend.split(colorHash)
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
  })

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
    if (!data.inGame || sendDirection) return
    sendDirection = true

    const direction = directions[key.toLowerCase()]

    if (direction === undefined) return
    if (data.lastDirection !== -1 && (data.lastDirection - direction) % 2 === 0) return

    data.lastDirection = direction
    socket.emit(`direction`, direction)
  })
}

if (typeof window !== `undefined`) setup()
