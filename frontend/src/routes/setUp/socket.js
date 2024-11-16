import { connect } from "socket.io-client"

const address = "https://verbose-succotash-69gq79965wq6fwgx-4000.app.github.dev"

export const setUpSocket = (setState) => {
  if(global.data.setUp && global.data.socket.on) {
    return
  }

  global.data.socket = connect(address)

  global.data.socket.on(`connect`, () => {
    setState("1")
  })

  global.data.socket.on(`disconnect`, () => {
    setState("0")
  })

  global.data.socket.on(`newSnake`, ({ message }) => {
    console.log(message)
  })
}