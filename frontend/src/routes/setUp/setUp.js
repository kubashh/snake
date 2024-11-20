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

  if(!global.data.socket) {
    global.data.socket = {}
  }

  getCanvas()
}

setUp()