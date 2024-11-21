import { useEffect, useState } from "react";
import { Game } from "./routes/game/Game"
import { Menu } from "./routes/menu/Menu"

export const App = () => {
  const[, setState] = useState(0)

  useEffect(() => {
    let i = 1
    global.data.reload = () => {
      setState(i)
      i++
    }
  }, [])

  return (
    <>
      {global.data.inGame ? <Game /> : <Menu />}
    </>
  )
}