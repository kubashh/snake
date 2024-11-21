export const setNewSnake = (setState) => {
  global.data.socket.on(`newSnake`, ({ success, message }) => {
    if(success) {
      // Start game
      global.data.inGame = true
      global.data.reload()
      //setState("g")
    } else {
      alert(message)
    }
  })
}