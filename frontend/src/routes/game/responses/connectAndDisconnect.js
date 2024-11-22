export const setConnectAndDiconect = () => {
  global.data.socket.on(`connect`, global.data.reload)

  global.data.socket.on(`disconnect`, global.data.reload)
}