import { useEffect, useState } from "react";
import { Game } from "./routes/game/Game"
import { Menu } from "./routes/menu/Menu"

export const App = () => {
  const[state, setState] = useState(false)

  useEffect(() => {
    global.data.reload = () => {
      setState(!state)
    }
  }, [])

  return (
    <>
      {global.data.inGame ? <Game /> : <Menu />}
    </>
  )
}