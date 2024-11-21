export const setNewSnake = (setState) => {
  global.data.socket.on(`newSnake`, ({ success, message }) => {
    if(success) {
      // Start game
      global.data.inGame = true
      setState("g")
    } else {
      alert(message)
    }
  })
}