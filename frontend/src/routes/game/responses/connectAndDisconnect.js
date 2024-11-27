import { address } from "../../consts"
import { data } from "../../data"

const setData = async () => {
  const response = await fetch(address)
  const dataFromBackend = await response.json()
  console.log(dataFromBackend)
}

export const setConnectAndDiconect = () => {
  data.socket.on(`connect`, () => {
    data.reload()

    setData()
  })

  data.socket.on(`disconnect`, () => {
    data.reload()
  })
}