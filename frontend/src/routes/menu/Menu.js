import { useState } from "react"
import { TextInput } from "./TextInput"
import { UI } from "./UI"

const getOldData = () => {
  if(!global.data.user) {
    const oldData = localStorage.getItem(`data`)

    let user = {
      nick: "Nick",
      color: "#ff0000"
    }

    if(oldData) {
      const data = JSON.stringify(oldData)
      if(data.nick && data.color) {
        user.nick = data.nick
        user.data.color
      }
    }

    global.data.user = user
  }

  return global.data.user
}

export const Menu = () => {
  const user = getOldData()

  console.log(user)

  const [nick, setNick] = useState(user.nick)
  const [color, setColor] = useState(user.color)

  return (
    <>
      <UI />
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
            height: 48,
            fontSize: 32
          }}
          value="Start Game"
          onClick={() => {
            global.data.user.nick = nick
            global.data.user.color = color
            if(global.data.socket.connected) {
              // Start game
              global.data.socket.emit(`newSnake`, { nick, color })
            } else {
              alert(`Connection lost`)
            }
          }}
        />
      </div>
    </>
  )
}