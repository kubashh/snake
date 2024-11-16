import express, { json } from "express"
import cors from "cors"
import { createServer } from "http"

const corsOptions = {
  origin: "https://kubashh.github.io/snake"
}

const app = express(cors(corsOptions))
app.use(json())

export const server = createServer(app)