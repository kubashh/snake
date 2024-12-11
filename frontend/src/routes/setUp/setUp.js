import "./style.css"
import "../game/setSocket"
import { setUser } from "./setUser"
import { setSocket } from "../game/setSocket"

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
    user: {},
    socket: {},
    ctx: {}
  }

  setUser()
  setSocket()
}

setUp()