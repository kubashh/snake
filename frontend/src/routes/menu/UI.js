import { useState } from "react"

export const UI = () => {
  const [connected, setConnected] = useState(global.data.socket.connected | false)
  
  global.data.socket.on(`connect`, () => {
    setConnected(true)
  })

  return (
    <div
      style={{
        position: "absolute",
        top: 8,
        left: 16
      }}
    >
      <div>
        {connected ? <div>connected</div> : <div style={{color: "red"}}>not connected</div>}
      </div>
    </div>
  )
}