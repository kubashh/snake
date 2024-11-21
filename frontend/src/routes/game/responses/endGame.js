export const endGame = () => {
  localStorage.setItem(`data`, JSON.stringify(global.data.user))

  global.data.inGame = false
  global.data.ctx = null
  global.data.gameCanvas = null

  alert(`You lose! (From endGame)`)

  setState(`e`)
}