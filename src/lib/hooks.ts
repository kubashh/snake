import { useEffect } from "react"
import { socket } from "./socket"
import { Signal } from "./classes"

export function useSoket() {
  const isConnected = new Signal(false)

  useEffect(() => {
    const onConnect = () => {
      isConnected.value = true
    }

    const onDisconnect = () => {
      isConnected.value = false
    }

    if (socket.connected) onConnect()

    socket.on(`connect`, onConnect)
    socket.on(`disconnect`, onDisconnect)

    return () => {
      socket.off(`connect`, onConnect)
      socket.off(`disconnect`, onDisconnect)
    }
  }, [])

  return isConnected.value
}
