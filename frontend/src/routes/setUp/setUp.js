import "./style.css"
import "../game/setSocket"
import { setUser } from "./setUser"
import { setSocket } from "../game/setSocket"

const setUp = () => {
  setUser()
  setSocket()
}

setUp()