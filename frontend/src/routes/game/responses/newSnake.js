export const setNewSnake = () => {
  global.data.socket.on(`newSnake`, ({ success, message }) => {
    if(success) {
      // Start game
      global.data.inGame = true
      global.data.reload()
    } else {
      alert(message)
    }
  })
}