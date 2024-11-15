const serverPath = "verbose-succotash-69gq79965wq6fwgx.github.dev"

export const setUp = () => {
  if(!global.data) {
    global.data = {}
  }

  if(global.data.setUp) {
    alert(`Code again`)
  } else {
    global.data.setUp = true
  }

  if(!global.data.user) {
    global.data.user = {
      nick: "Nick",
      color: "red"
    }
  }

  //global.data.socket = new WebSocket(`ws://${serverPath}:4000`)

  /*global.data.socket.on(`connection`, () => {
    alert(`connected!`)
  })*/
}