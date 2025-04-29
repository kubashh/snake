import { data } from "../lib/consts"
import { useRefresh } from "../lib/hooks"

const UI = () => (
  <div
    className={`absolute top-4 left-8 bg-transparent ${
      !data.socket.connected ? `text-red-600` : ``
    }`}
  >
    {!data.socket.connected && `not `}connected
  </div>
)

const Form = () => (
  <form
    className="absolute w-fit flex flex-col mt-[10vh] mr-auto ml-auto p-8 left-0 right-0 rounded-3xl bg-zinc-800"
    onSubmit={(e) => {
      e.preventDefault()

      for (const element of document.getElementsByTagName(`input`)) {
        if (element.id === `nick`) data.nick = element.value
      }

      localStorage.setItem(`nick`, JSON.stringify(data.nick))

      if (data.socket.connected) {
        // Start game
        data.socket.emit(`new`, data.nick)
      } else alert(`Connection lost`)
    }}
  >
    <h1>Menu</h1>
    <input
      className="w-48 h-12 mx-6 my-8 border-2 px-2 border-black text-2xl rounded-2xl"
      id="nick"
      type="text"
      defaultValue={data.nick}
      placeholder="Nick"
    />
    <input
      type="submit"
      className="mt-2 mx-6 border-2 border-black py-2 text-2xl rounded-2xl cursor-pointer"
      value="Start Game"
    />
  </form>
)

export const Menu = () => {
  data.refresh = useRefresh()

  return !data.inGame ? (
    <>
      <UI />
      <Form />
    </>
  ) : null
}
