import { useState } from "react";
import { Game } from "./routes/Game"
import { Menu } from "./routes/menu/Menu"
import { setUpSocket } from "./routes/setUp/socket"

export const App = () => {
  const[state, setState] = useState(false);

  setUpSocket(setState)

  return (
    <>
      {global.data.inGame ? <Game /> : <Menu
        setState={setState}
      />}
    </>
  )
}