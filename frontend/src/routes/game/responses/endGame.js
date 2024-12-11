export const setEndGame = () => {
  const { data } = window

  data.socket.on(`endGame`, () => {
    localStorage.setItem(`data`, JSON.stringify(data.user))

    data.inGame = false

    data.reload()
  })
}