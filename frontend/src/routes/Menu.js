export const Menu = () => {
  let connected = false

  return (
    <div>
      <div>
        {connected ? <div>connected</div> : <div style={{color: "red"}}>not connected</div>}
      </div>
      <div
        style={{
          display: "flex",
          justyfyContent: "center",
          marginTop: 100
        }}
      >
        <h1>Menu</h1>
      </div>
    </div>
  )
}