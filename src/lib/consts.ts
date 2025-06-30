import info from "../../public/info.json"

export const data: DataType = {
  nick: ``,
  setInGame: null,
  lastDirection: -1,

  inGame: false,
  ctx: null,
}

export const pixelSize = 40

export const boardSize = info.boardSize
export const appleColor = info.appleColor
export const colorHash = info.colorHash
