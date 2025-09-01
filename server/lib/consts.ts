import info from "../../public/info.json"
import type { Snake } from "../game/Snake"

export const boardSize = info.boardSize
export const appleColor = info.appleColor
export const colorHash = info.colorHash

export const data = { board: `` }

export const snakes: Snake[] = []
export const apples: Record<number, boolean> = {}
