export const setNewSnake = () => {
  window.data.socket.on(`newSnake`, ({ success, message }) => {
    if(success) {
      // Start game
      window.data.inGame = true
      window.data.reload()
    } else {
      alert(message)
    }
  })
}