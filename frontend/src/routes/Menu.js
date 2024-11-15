export const Menu = () => {
  let connected = false
  let lastNick = "Your nick"
  let lastColor = "red"

  return (
    <div>
      <div>
        {connected ? <div>connected</div> : <div style={{color: "red"}}>not connected</div>}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 100
        }}
      >
        <h1>Menu</h1>
        <div>
          <div>
            Name
          </div>
          <input
            type="text"
            value={lastNick}
            placeholder="Your nick"
          />
        </div>
        <div>
          <div>
            Color
          </div>
          <input
            type="color"
            value={lastColor}
          />
        </div>
      </div>
    </div>
  )
}