import { useEffect } from "react"
import { Game } from "./routes/game/Game"
import { Menu } from "./routes/menu/Menu"
import { useRefresh } from "./lib/hooks"
import { data } from "./lib/consts"

export const App = () => {
  const refresh = useRefresh()

  useEffect(() => {
    data.refresh = refresh
  })

  return <>{data.inGame ? <Game /> : <Menu />}</>
}
