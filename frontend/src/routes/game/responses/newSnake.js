export const setNewSnake = () => {
  const { data } = window

  data.socket.on(`newSnake`, ({ success, message }) => {
    if(success) {
      // Start game
      data.inGame = true
      data.reload()
    } else {
      alert(message)
    }
  })
}