export const setConnectAndDiconect = () => {
  window.data.socket.on(`connect`, () => window.data.reload())

  window.data.socket.on(`disconnect`, () => window.data.reload())
}

export const setStaticData = () => {
  window.data.socket.on(`staticData`, ({ boardSize, appleColor }) => {
    window.data.boardSize = boardSize
    window.data.appleColor = appleColor
  })
}

export const setNewSnake = () => {
  window.data.socket.on(`newSnake`, ({ success, message }) => {
    if (success) {
      // Start game
      window.data.inGame = true
      window.data.reload()
    } else {
      alert(message)
    }
  })
}

export const setEndGame = () => {
  window.data.socket.on(`endGame`, () => {
    localStorage.setItem(`data`, JSON.stringify(window.data.user))

    window.data.inGame = false

    window.data.reload()
  })
}
