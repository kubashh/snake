export const startGame = (setState) => {
  global.data.inGame = true
  setState("g")
}