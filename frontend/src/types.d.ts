// Data
type DataType = {
  inGame: boolean
  lastDirection: number
  refresh: (() => void) | null

  nick: string
  socket: any
  ctx: CanvasRenderingContext2D | null

  pixelSize: number
  boardSize: number
  appleColor: string
}

// Static
type StaticType = { boardSize: number; appleColor: string }

// New
type NewType = { success: boolean; message: string }

// XY
type XY = { x: number; y: number }
