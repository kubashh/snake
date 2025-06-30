"use client"

import { Menu } from "@/components/Menu"
import { useSoket } from "../lib/hooks"
import { Game } from "@/components/Game"

export default function Home() {
  const isConnected = useSoket()

  return (
    <>
      <header className="absolute z-1 w-screen">
        <div>
          <p>Status: {isConnected ? `connected` : `disconnected`}</p>
        </div>
        <Menu />
      </header>
      <main>
        <Game />
      </main>
    </>
  )
}
