"use client"

import { data, inGame, socket } from "../lib/consts"

function Form() {
  return (
    <form
      className="absolute w-fit flex flex-col mt-[10vh] mx-auto p-8 left-0 right-0 rounded-3xl bg-zinc-800"
      onSubmit={(e) => {
        e.preventDefault()

        for (const element of document.getElementsByTagName(`input`)) {
          if (element.id === `nick`) data.nick = element.value
        }

        localStorage.setItem(`nick`, data.nick)

        if (socket.OPEN) {
          // Start game
          socket.send(`n${data.nick}`)
        } else alert(`Connection lost`)
      }}
    >
      <h1>Menu</h1>
      <input
        className="w-48 h-12 mx-6 my-8 border-2 px-2 border-zinc-400 text-2xl rounded-2xl"
        id="nick"
        type="text"
        defaultValue={data.nick}
        placeholder="Nick"
        required
      />
      <input
        type="submit"
        className="mt-2 mx-6 border-2 border-zinc-400 py-2 text-2xl rounded-2xl cursor-pointer"
        value="Start Game"
      />
    </form>
  )
}

export default function Menu() {
  inGame.bind(() => {
    data.lastDirection = -1
  })

  return !inGame.value ? <Form /> : null
}
