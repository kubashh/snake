import { useEffect, useRef } from "react"
const { data } = window

export const Game = () => {
  const ref = useRef()

  useEffect(() => {
    const gameCanvas = ref.current
    gameCanvas.width = window.innerWidth
    gameCanvas.height = window.innerHeight
    const ctx = gameCanvas.getContext(`2d`)
    data.ctx = ctx
  })

  return <canvas
    ref={ref}
    style={{
      display: "block",
      width: "100vw",
      height: "100vh"
    }}
  />
}