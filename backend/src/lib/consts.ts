import type { Snake } from "../game/Snake"

export const boardSize = 48
export const appleColor = `yellow`

export const staticData = { boardSize, appleColor }

export const data = { board: `` }

export const snakes: Snake[] = []
export const apples: XY[] = []
