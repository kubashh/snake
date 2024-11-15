import { Game } from "./routes/Game"
import { Menu } from "./routes/Menu"

export const App = () => {
  let inGame = false

  return (
    <div>
      {inGame ? <Game /> : <Menu />}
    </div>
  )
}