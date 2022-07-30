import React, { useEffect } from "react"
import "../css/main.css"
import { Header, Banner, Cases } from "../components/"

export default function Home() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01

    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }, [])

  return (
    <div className="App">
      <Header />
      <Banner />
      <Cases />
    </div>
  )
}
