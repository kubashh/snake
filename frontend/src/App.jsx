import { useEffect, useState } from "react";
import { Game } from "./routes/game/Game"
import { Menu } from "./routes/menu/Menu"

export const App = () => {
  const[i, setState] = useState(0)

  useEffect(() => {
    window.data.reload = () => {
      setState(i + 1)
    }
  })

  return <>
    {window.data.inGame ? <Game /> : <Menu />}
  </>
}