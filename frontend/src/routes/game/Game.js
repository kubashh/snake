import { getCanvas } from "./getCanvas"

export const Game = () => {
  getCanvas()

  return (
    <canvas
      id="gameCanvas"
      style={{
        display: "block",
        height: "100%",
        width: "100%"
      }}
    />
  )
}