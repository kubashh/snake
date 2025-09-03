"use client"

import { useEffect, useRef } from "react"

import { data } from "../lib/consts"

export const Game = () => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.width = window.innerWidth
      ref.current.height = window.innerHeight
      data.ctx = ref.current.getContext(`2d`)
    }
  }, [ref])

  return <canvas ref={ref} className="block" />
}
