import { useState } from "react"
import { TextInput } from "./TextInput"
import { UI } from "./UI"
import { data } from "../../lib/consts"

export const Menu = () => {
  const [nick, setNick] = useState(data.user.nick)
  const [color, setColor] = useState(data.user.color)

  return (
    <>
      <UI />
      <div
        className="flex flex-col"
        style={{
          alignSelf: "center",
          margin: "100px auto 0 auto",
          width: 480,
          padding: 32,
          backgroundColor: "#333",
          borderRadius: 16,
        }}
      >
        <h1>Menu</h1>
        <TextInput
          text="Nick"
          input={{ type: "text", value: nick, placeholder: "Your nick" }}
          setValue={setNick}
        />
        <TextInput
          text="Color"
          input={{ type: "color", value: color }}
          setValue={setColor}
        />
        <input
          type="button"
          style={{
            marginTop: 12,
            border: 0,
            borderRadius: 8,
            height: 48,
            fontSize: 32,
          }}
          value="Start Game"
          onClick={() => {
            data.user = { nick, color }
            if (data.socket.connected) {
              // Start game
              data.socket.emit(`newSnake`, data.user)
            } else {
              alert(`Connection lost`)
            }
          }}
        />
      </div>
    </>
  )
}
