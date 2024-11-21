import { useState } from "react";
import { Game } from "./routes/game/Game"
import { Menu } from "./routes/menu/Menu"
import { setUpSocket } from "./routes/game/socket"

export const App = () => {
  const[, setState] = useState("");

  setUpSocket(setState)

  return (
    <>
      {global.data.inGame ? <Game /> : <Menu />}
    </>
  )
}