export const UI = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 8,
        left: 16,
      }}
    >
      {window.data.socket.connected ? (
        <div>connected</div>
      ) : (
        <>
          <div
            style={{
              color: "red",
            }}
          >
            not connected
          </div>
          <div>Call Jakub Hanula to turn on the server</div>
        </>
      )}
    </div>
  )
}
