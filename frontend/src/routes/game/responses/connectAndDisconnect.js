import { data } from "../../data"

const reload = () => {
  data.reload()
}

export const setConnectAndDiconect = () => {
  data.socket.on(`connect`, reload)

  data.socket.on(`disconnect`, reload)
}