import io from "socket.io-client"

const serverPath = "verbose-succotash-69gq79965wq6fwgx.github.dev"
const address = `ws://${serverPath}:4000`

const setUpSocket = () => {
  let socket = io.connect(address)

  const connectWebSocket = () => {
    //socket = new WebSocket(address, [])
  }

  connectWebSocket()
  //global.data.socket = new WebSocket(`ws://${serverPath}:4000`)
}

export const setUp = () => {
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
    global.data.user = {
      nick: "Nick",
      color: "red"
    }
  }

  setUpSocket()
}