import { useEffect, useRef } from "react"

export const Game = () => {
  const ref = useRef()

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext(`2d`)
    global.data.ctx = ctx
    console.log(global.data.ctx)
  }, [])

  return (
    <canvas
      id="gameCanvas"
      ref={ref}
      style={{
        display: "block",
        width: window.innerWidth,
        height: window.innerHeight
      }}
    />
  )
}