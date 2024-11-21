import { getCanvas } from "./getCanvas"

export const Game = () => {
  getCanvas()

  return (
    <canvas
      id="gameCanvas"
      style={{
        display: "block",
        width: "100%",
        height: "100%"
      }}
    />
  )
}