import { fps } from "../data"
import { render } from "./render"

export const snake = () => {
  setInterval(render, fps)
}