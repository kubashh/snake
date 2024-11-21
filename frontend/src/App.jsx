import { useEffect, useState } from "react";
import { Game } from "./routes/game/Game"
import { Menu } from "./routes/menu/Menu"
import { setUpSocket } from "./routes/game/socket"

export const App = () => {
  const[state, setState] = useState(false)

  useEffect(() => {
    global.data.reload = () => {
      setState(global.inGame)
    }
  }, [])

  setUpSocket()

  return (
    <>
      {global.data.inGame ? <Game /> : <Menu />}
    </>
  )
}