import "./style.css"
import { setSocket } from "../game/setSocket"

const getUser = () => {
  const oldData = localStorage.getItem(`data`)

  let user = {
    nick: "Nick",
    color: "#ff0000"
  }

  if(oldData) {
    const { nick, color } = JSON.parse(oldData)
    if(nick && color) {
      user = { nick, color }
    }
  }

  return user
}

const setUp = () => {
  if(window.data) {
    return
  }

  // Set Up Data
  window.data = {
    address: `https://verbose-succotash-69gq79965wq6fwgx-4000.app.github.dev`,
    pixelSize: 40,
    inGame: false,
    boardSize: null,
    appleColor: null,
    user: getUser(),
    socket: {},
    ctx: {}
  }

  setSocket()
}

setUp()