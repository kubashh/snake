export const setEndGame = () => {
  global.data.socket.on(`endGame`, () => {
    localStorage.setItem(`data`, JSON.stringify(global.data.user))

    global.data.inGame = false

    alert(`You lose! (From endGame)`)

    global.data.reload()
  })
}