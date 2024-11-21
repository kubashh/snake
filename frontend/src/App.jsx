import { useEffect, useState } from "react";
import { Game } from "./routes/game/Game"
import { Menu } from "./routes/menu/Menu"

export const App = () => {
  const[, setState] = useState(false)

  useEffect(() => {
    global.data.reload = () => {
      console.log(`inGame`, global.data.inGame)
      setState(global.data.inGame)
    }
  }, [])

  return (
    <>
      {global.data.inGame ? <Game /> : <Menu />}
    </>
  )
}