import { createRoot } from "react-dom/client"
import "./styles/globals.css"
import "./lib/setUp"
import { App } from "./App"

createRoot(document.getElementById(`root`)!).render(<App />)
