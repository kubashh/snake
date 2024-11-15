import { useState } from "react";
import { Game } from "./routes/Game"
import { Menu } from "./routes/menu/Menu"

export const App = () => {
  const[state, setState] = useState(false);

  return (
    <>
      {global.data.inGame ? <Game /> : <Menu
        setState={setState}
      />}
    </>
  )
}