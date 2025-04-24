import { Game } from "./routes/game/Game"
import { Menu } from "./routes/menu/Menu"

export const App = () => {
  return (
    <>
      <Menu />
      <Game />
    </>
  )
}
