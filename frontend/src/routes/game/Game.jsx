import { useEffect, useRef } from "react"

export const Game = () => {
  const ref = useRef()

  useEffect(() => {
    const gameCanvas = ref.current
    gameCanvas.width = window.innerWidth
    gameCanvas.height = window.innerHeight
    const ctx = gameCanvas.getContext(`2d`)
    global.data.ctx = ctx
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        display: "block"
      }}
    />
  )
}