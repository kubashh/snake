export const setConnectAndDiconect = (setState) => {
  global.data.socket.on(`connect`, () => {
    setState("1")
  })

  global.data.socket.on(`disconnect`, () => {
    setState("0")
  })
}