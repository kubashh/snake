const reload = () => {
  window.data.reload()
}

export const setConnectAndDiconect = () => {
  window.data.socket.on(`connect`, reload)

  window.data.socket.on(`disconnect`, reload)
}