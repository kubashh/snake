import { isNickFree, Snake } from "./game/Snake"
import { snakes } from "./lib/consts"

export function onMessage(ws: Bun.ServerWebSocket<unknown>, message: string) {
  const data = message.slice(1)

  switch (message.at(0)) {
    case `n`: {
      const isValid = isNickFree(data)
      if (isValid) new Snake(data, ws)

      ws.send(`n${isValid ? `` : `Choose other nick`}`)
      break
    }
    case `d`: {
      snakes.find((snake) => snake.socket === ws)?.changeDirection(Number(data))
      break
    }
  }
}
