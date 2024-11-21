import { useEffect, useRef } from "react"

export const Game = () => {
  const ref = useRef()
js
  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = `gray`
    ctx.fillRect(10, 10, 100, 100)
  }

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext(`2d`)
    draw(ctx)
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