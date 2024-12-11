import { useEffect, useState } from "react";
import { Game } from "./routes/game/Game"
import { Menu } from "./routes/menu/Menu"
const { data } = window

export const App = () => {
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