import { Menu } from "./pages/Menu"

export const App = () => {
  return (
    <>
      <header className="absolute z-1 w-screen">
        <Menu />
      </header>
      <main>
        <canvas className="w-screen h-screen block" />
      </main>
    </>
  )
}
