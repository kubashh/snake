import { useState } from "react"

const TextInput = ({text, input, setValue}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "24 auto 0 auto"
      }}
    >
      <div
        style={{
          marginRight: 16,
          height: 32,
          width: 256
        }}
      >
        {text}
      </div>
      <input
        style={{
          margin: 0,
          border: 0,
          padding: 0,
          height: 32,
          width: 128
        }}
        type={input.type}
        value={input.value}
        placeholder={input.placeholder}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
    </div>
  )
}

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
          width: 400,
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
            marginTop: 12
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