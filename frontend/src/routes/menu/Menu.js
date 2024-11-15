import { useState } from "react"
import { TextInput } from "./TextInput"

export const Menu = () => {
  const [nick, setNick] = useState(global.data.user.nick)
  const [color, setColor] = useState(global.data.user.color)

  return (
    <div>
      <div>
        {global.data.socket.connected ? <div>connected</div> : <div style={{color: "red"}}>not connected</div>}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          margin: "100px auto 0 auto",
          width: 480,
          padding: 32,
          backgroundColor: "#333",
          borderRadius: 16
        }}
      >
        <h1>Menu</h1>
        <TextInput
          text="Nick"
          input={{
            type: "text",
            value: nick,
            placeholder: "Your nick"
          }}
          setValue={setNick}
        />
        <TextInput
          text="color"
          input={{
            type: "color",
            value: color
          }}
          setValue={setColor}
        />
        <input
          type="button"
          style={{
            marginTop: 12,
            border: 0,
            borderRadius: 8,
            height: 16
          }}
          value="Start Game"
          onClick={() => {
            alert(`Start game`)
          }}
        />
      </div>
    </div>
  )
}