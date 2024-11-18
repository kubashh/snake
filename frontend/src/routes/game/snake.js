import { fps, render } from "./render"


export const snake = () => {
  console.log(`Start game`)

  setInterval(render, fps)
}