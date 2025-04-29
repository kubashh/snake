import { data } from "../../lib/consts"

export const UI = () => (
  <div
    className={`absolute z-1 top-4 left-8 ${
      !data.socket.connected ? `text-red-600` : ``
    }`}
  >
    {!data.socket.connected && `not `}connected
  </div>
)
