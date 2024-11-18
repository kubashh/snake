export const fps = 1000 / 60

export const render = () => {
  global.data.socket.emit(`board`, (board) => {
    console.log(board)
  })
}