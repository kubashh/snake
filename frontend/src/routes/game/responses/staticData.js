export const setStaticData = () => {
  const { data } = window

  data.socket.on(`staticData`, ({ boardSize, appleColor }) => {
    data.boardSize = boardSize
    data.appleColor = appleColor
  })
}