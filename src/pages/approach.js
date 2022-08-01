import React, { useEffect } from "react"
import gsap from "gsap"

const Approach = () => {
  useEffect(() => {
    gsap.to("body", { css: { visibility: "visible", duration: 0 } })
  }, [])
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <h3>This is the approach page</h3>
        </div>
      </div>
    </div>
  )
}

export default Approach
