import "./routes/setUp"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"

alert(`Odpalono index`)

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)