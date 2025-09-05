import Game from "../components/Game"
import Menu from "../components/Menu"
import { socket } from "../lib/consts"

export default function App() {
  return (
    <>
      <header className="absolute z-1 w-screen">
        <div>
          <p>Status: {socket.OPEN ? `connected` : `disconnected`}</p>
        </div>
        <Menu />
      </header>
      <main>
        <Game />
      </main>
    </>
  )
}
