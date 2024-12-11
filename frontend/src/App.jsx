import { useEffect, useState } from "react";
import { Game } from "./routes/game/Game"
import { Menu } from "./routes/menu/Menu"

export const App = () => {
  const { data } = window

  const[i, setState] = useState(0)

  useEffect(() => {
    data.reload = () => {
      setState(i + 1)
    }
  })

  return <>
    {data.inGame ? <Game /> : <Menu />}
  </>
}