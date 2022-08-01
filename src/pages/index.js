import React, { useEffect, useLayoutEffect, useState } from "react"
import "../css/main.css"
import { Header, Banner, Cases, IntroOverlay, Navigation } from "../components/"
import { homeAnimation } from "../utils/homeAnimation"
import { debounce } from "../utils/debounce"

export default function Home() {
  // const title = useRef()
  const [animationComplete, setAnimationComplete] = useState(false)
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  const completeAnimation = () => {
    setAnimationComplete(true)
  }
  useEffect(() => {
    let vh = dimensions.height * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    // const HandleResize = () => {
    //   setDimensions({
    //     height: window.innerHeight,
    //     width: window.innerWidth,
    //   })
    // }

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }, 1000)
    window.addEventListener("resize", debouncedHandleResize)

    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  }, [dimensions.height])

  useLayoutEffect(() => {
    homeAnimation(completeAnimation)
  }, [])

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Header dimensions={dimensions} />
      <div className="App">
        <Banner />
        <Cases />
      </div>
      <Navigation />
    </>
  )
}
