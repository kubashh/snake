import io from "socket.io-client"

const address = "https://verbose-succotash-69gq79965wq6fwgx-4000.app.github.dev"

const setUpSocket = () => {
  global.data.socket = io.connect(address)

  global.data.socket.on(`connection`, () => {
    alert(`conected!`)
  })

  console.log(global.data.socket)
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