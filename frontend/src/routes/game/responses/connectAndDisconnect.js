import { data } from "../../data"

export const setConnectAndDiconect = () => {
  data.socket.on(`connect`, () => {
    data.reload()
  })

  data.socket.on(`disconnect`, () => {
    data.reload()
  })
}