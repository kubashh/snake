import { useState } from "react"
import { TextInput } from "./TextInput"
import { UI } from "./UI"
import { data } from "../../lib/consts"
import { useRefresh } from "../../lib/hooks"

export const Menu = () => {
  data.refresh = useRefresh()

  const [nick, setNick] = useState(data.user.nick)
  const [color, setColor] = useState(data.user.color)

  return !data.inGame ? (
    <header className="absolute z-1 w-screen">
      <UI />
      <div
        className="absolute flex flex-col"
        style={{
          margin: `10vh auto 0 auto`,
          padding: 32,
          left: 0,
          right: 0,
          width: `fit-content`,
          backgroundColor: `#333`,
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
              data.socket.emit(`new`, data.user)
            } else {
              alert(`Connection lost`)
            }
          }}
        />
      </div>
    </header>
  ) : null
}
