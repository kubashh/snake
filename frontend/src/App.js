import { Game } from "./routes/Game"
import { Menu } from "./routes/menu/Menu"

export const App = () => {
  return (
    <div>
      {global.data.inGame ? <Game /> : <Menu />}
    </div>
  )
}