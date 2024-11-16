import express from "express"
import cors from "cors"
import { createServer } from "http"

const corsOptions = {
  origin: "https://kubashh.github.io/snake"
}

const app = express(cors(corsOptions))

export const server = createServer(app)