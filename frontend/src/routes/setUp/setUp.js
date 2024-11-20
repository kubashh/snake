import "./setCss"
import { getCanvas } from "./getCanvas"

const setUp = () => {
  if(!global.data) {
    global.data = {}
  }

  if(global.data.setUp) {
    alert(`Code again`)
    return
  } else {
    global.data.setUp = true
  }

  // Get previous nick and color
  if(!global.data.user) {
    const oldData = localStorage.getItem(`data`)

    let user = {
      nick: "Nick",
      color: "#ff0000"
    }

    if(oldData) {
      const { nick, color } = JSON.parse(oldData)
      if(nick && color) {
        user.nick = nick
        user.color = color
      }
    }

    global.data.user = user
  }

  if(!global.data.socket) {
    global.data.socket = {}
  }

  getCanvas()
}

setUp()