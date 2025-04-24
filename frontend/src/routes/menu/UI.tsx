import { data } from "../../lib/consts"

export const UI = () => (
  <div
    className="absolute"
    style={{ top: 8, left: 16, color: !data.socket.connected ? `red` : `` }}
  >
    {!data.socket.connected && `not `}connected
  </div>
)
