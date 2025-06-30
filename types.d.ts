/// <reference types="next" />
/// <reference types="next/image-types/global" />

// Data
type DataType = {
  inGame: boolean
  setInGame: ((arg: boolean) => void) | null
  lastDirection: number

  nick: string
  ctx: CanvasRenderingContext2D | null
}

// Static
type StaticType = { boardSize: number; appleColor: string }

// New
type NewType = { success: boolean; message: string }

// XY
type XY = { x: number; y: number }
