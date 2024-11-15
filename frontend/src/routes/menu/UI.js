import { useState } from "react"

export const UI = (connected = false) => {
  const [connected, setConnected] = useState(global.data.user.connected)
  if(connected) {
    setConnected(true)
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 8,
        left: 16
      }}
    >
      <div>
        {global.data.socket.connected ? <div>connected</div> : <div style={{color: "red"}}>not connected</div>}
      </div>
    </div>
  )
}