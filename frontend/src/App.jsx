import { Game } from "./routes/game/Game"
import { Menu } from "./routes/menu/Menu"
import { useRefresh } from "./lib/hooks"
import { data } from "./lib/consts"

export const App = () => {
  data.refresh = useRefresh()

  return data.inGame ? <Game /> : <Menu />
}
