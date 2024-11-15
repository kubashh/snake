import { useState } from "react"

export const UI = () => {
  const [c, setC] = useState(false)
  
  global.data.socket.on(`connect`, () => {
    setC(true)
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
        {global.data.socket.connected ? <div>connected</div> : <div style={{color: "red"}}>not connected</div>}
      </div>
    </div>
  )
}