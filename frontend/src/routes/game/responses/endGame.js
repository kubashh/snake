export const setEndGame = () => {
  window.data.socket.on(`endGame`, () => {
    localStorage.setItem(`data`, JSON.stringify(window.data.user))

    window.data.inGame = false

    window.data.reload()
  })
}