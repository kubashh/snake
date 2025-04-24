import { useState } from "react"

export const useRefresh = () => {
  const setState = useState(false)[1]
  return () => setState((prev) => !prev)
}
