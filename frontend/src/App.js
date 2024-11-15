import { Game } from "./routes/Game"
import { Menu } from "./routes/Menu"
import { setUp } from "./routes/setUp"

export const App = () => {
  setUp()

  return (
    <div>
      {global.data.inGame ? <Game /> : <Menu />}
    </div>
  )
}