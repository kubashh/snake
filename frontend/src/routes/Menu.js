import { createPortal } from "react"

export const Menu = () => {
  let connected = false

  return (
    <div>
      <div>
        {connected ? <div>connected</div> : <div style={{color:0xff000}}>not connected</div>}
      </div>
      <h1>Menu</h1>
    </div>
  )
}