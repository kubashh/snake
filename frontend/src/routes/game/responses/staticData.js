export const setStaticData = () => {
  data.socket.on(`staticData`, ({ boardSize, appleColor }) => {
    window.data.boardSize = boardSize
    window.data.appleColor = appleColor
  })
}