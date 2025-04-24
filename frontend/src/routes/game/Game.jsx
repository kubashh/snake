import { useRef } from "react"
import { data } from "../../lib/consts"

export const Game = () => {
  const ref = useRef()

  if (ref.current) {
    const gameCanvas = ref.current
    gameCanvas.width = window.innerWidth
    gameCanvas.height = window.innerHeight
    data.ctx = gameCanvas.getContext(`2d`)
  }

  return <canvas ref={ref} className="w-screen h-screen block" />
}
