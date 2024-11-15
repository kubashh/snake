export const UI = () => {
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