export const UI = () => {
  const connected = <div>connected</div>
  const notConnected = <div>
    <div
      style={{
        color: "red"
      }}
    >
      not connected
    </div>
    <div>
      Call Jakub Hanula to turn on the server
    </div>
  </div>

  return (
    <div
      style={{
        position: "absolute",
        top: 8,
        left: 16
      }}
    >
      {global.data.socket.connected ? connected : notConnected}
    </div>
  )
}