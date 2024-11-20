export const render = () => {
  global.data.socket.emit(`board`, global.data.user.nick)
}