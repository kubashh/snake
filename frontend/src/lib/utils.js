import { data } from "./consts"

export const getUser = () => {
  const oldData = localStorage.getItem(`data`)

  let user = {
    nick: "Nick",
    color: "#ff0000",
  }

  if (oldData) {
    const { nick, color } = JSON.parse(oldData)
    if (nick && color) {
      user = { nick, color }
    }
  }

  return user
}

export const drawBox = (x, y, w, h, color) => {
  if (color) data.ctx.fillStyle = color

  data.ctx.fillRect(x, y, w, h)
}

export const fillBackground = () => {
  const { width, height } = data.ctx.canvas
  drawBox(0, 0, width, height, `#008`)
}
