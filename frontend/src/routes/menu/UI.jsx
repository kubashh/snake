import { data } from "../../lib/consts"

export const UI = () => (
  <div style={{ position: "absolute", top: 8, left: 16 }}>
    {data.socket.connected ? (
      <div>connected</div>
    ) : (
      <>
        <div style={{ color: "red" }}>not connected</div>
        <div>Call Jakub Hanula to turn on the server</div>
      </>
    )}
  </div>
)
