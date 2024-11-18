import { fps, render } from "./render"


export const snake = () => {
  setInterval(render, fps)
}