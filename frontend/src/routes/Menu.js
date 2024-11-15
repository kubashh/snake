export const Menu = () => {
  let connected = false

  return (
    <div>
      <div>
        {connected ? <div>connected</div> : <div style={{color: "red"}}>not connected</div>}
      </div>
      <h1>Menu</h1>
    </div>
  )
}