import { data } from "../../data"

export const setStaticData = () => {
  data.socket.on(`staticData`, ({ boardSize, appleColor }) => {
    data.boardSize = boardSize
    data.appleColor = appleColor
  })
}