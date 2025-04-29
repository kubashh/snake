import { useState } from "react"
import { TextInput } from "./TextInput"
import { UI } from "./UI"
import { data } from "../../lib/consts"
import { useRefresh } from "../../lib/hooks"

const Form = () => {
  const [nick, setNick] = useState(data.user.nick)
  const [color, setColor] = useState(data.user.color)

  return (
    <form
      className="absolute w-fit flex flex-col mt-[10vh] mr-auto ml-auto p-8 left-0 right-0 rounded-3xl bg-zinc-800"
      onSubmit={(e) => {
        e.preventDefault()

        data.user = { nick, color }
        if (data.socket.connected) {
          // Start game
          data.socket.emit(`new`, data.user)
        } else {
          alert(`Connection lost`)
        }
      }}
    >
      <h1>Menu</h1>
      <TextInput
        text="Nick"
        input={{ type: "text", value: nick, placeholder: "Your nick" }}
        setValue={setNick}
        className="px-2 py-6"
      />
      <TextInput
        text="Color"
        input={{ type: "color", value: color }}
        setValue={setColor}
      />
      <input
        type="submit"
        className="mt-2 mx-6 border-2 border-black py-2 text-2xl rounded-2xl cursor-pointer"
        value="Start Game"
      />
    </form>
  )
}

export const Menu = () => {
  data.refresh = useRefresh()

  return !data.inGame ? (
    <header className="absolute z-1 w-screen">
      <UI />
      <Form />
    </header>
  ) : null
}
