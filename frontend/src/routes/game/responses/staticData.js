import { data } from "../../data"

export const setStaticData = () => {
  data.socket.on(`staticData`, ({ boardSize }) => {
    data.boardSize = boardSize
  })
}