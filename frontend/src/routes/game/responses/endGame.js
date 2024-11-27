import { data } from "../../data"

export const setEndGame = () => {
  data.socket.on(`endGame`, () => {
    localStorage.setItem(`data`, JSON.stringify(data.user))

    data.inGame = false

    data.reload()
  })
}