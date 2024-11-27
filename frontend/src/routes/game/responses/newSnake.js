import { data } from "../../data"

export const setNewSnake = () => {
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