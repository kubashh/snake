import { useState } from "react";
import { Game } from "./routes/game/Game"
import { Menu } from "./routes/menu/Menu"
import { setUpSocket } from "./routes/setUp/socket"

export const App = () => {
  const[state, setState] = useState("");

  setUpSocket(setState)

  return (
    <>
      {global.data.inGame ? <Game /> : <Menu />}
    </>
  )
}