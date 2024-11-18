export const render = () => {
  global.data.socket.emit(`board`)
}