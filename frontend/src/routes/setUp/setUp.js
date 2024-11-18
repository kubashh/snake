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

  if(!global.data.user) {
    const oldData = localStorage.getItem(`data`)

    let user = {
      nick: "Nick",
      color: "red"
    }

    if(oldData) {
      user = JSON.stringify(oldData)
    }

    global.data.user = user
  }

  if(!global.data.socket) {
    global.data.socket = {}
  }

  getCanvas()
}

setUp()