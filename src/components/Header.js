import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { IoIosArrowDropup } from "react-icons/io"
import gsap from "gsap"

let tl = gsap.timeline()

const Header = ({ dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false })

  useEffect(() => {
    if (menuState.menuOpened) {
      // tl.to("nav", { duration: 0.01, css: { display: "block" } })
      tl.to("body", { duration: 0.01, css: { overflow: "hidden" } })

        .to(".App", {
          duration: 1,
          y: dimensions.width <= 654 ? "70vh" : dimensions.height / 2,
          ease: "expo.inOut",
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        // .to(".hamburger-menu span", {
        //   duration: 0.6,
        //   delay: -0.6,
        //   scaleX: 1,
        //   transformOrigin: "50% 0%",
        //   ease: "expo.inOut",
        // })
        .to(".hamburger-menu-close", {
          duration: 1,
          delay: -0.4,
          display: "block",
          ease: "expo.inOut",
          // transformOrigin: "0% 100%",
        })
    } else {
      tl.to(".App", {
        duration: 1,
        y: 0,
        ease: "expo.inOut",
      })
        .to(".hamburger-menu-close", {
          duration: 0.2,
          css: {
            display: "none",
          },
        })
        .to("body", {
          css: {
            overflow: "auto",
          },
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -0.6,
          scaleX: 1,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
          // css: {
          //   display: "block",
          // },
        })
      // .to("nav", {
      //   css: {
      //     display: "block",
      //   },
      // })
    }
  }, [menuState.menuOpened])
  return (
    <Wrapper className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/">AGENCY.</a>
          </div>
          <div className="nav-toggle">
            <div
              className="hamburger-menu"
              onClick={() => setMenuState({ menuOpened: true })}
              aria-hidden="true"
            >
              <span></span>
              <span></span>
            </div>
            <div
              className="hamburger-menu-close"
              onClick={() => setMenuState({ menuOpened: false })}
              aria-hidden="true"
            >
              <IoIosArrowDropup style={{ fontSize: "2.4rem" }} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 128px;
  z-index: 4;
  @media screen and (max-width: 425px) {
    height: 96px;
  }
  h1 {
    color: black;
  }
  .logo {
    a {
      font-size: 1.2rem;
      letter-spacing: 0.5rem;
      color: black;
      text-decoration: none;
      font-weight: 700;
    }
  }
  .nav-toggle {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      margin-right: 24px;
    }
    @media screen and (max-width: 425px) {
      margin-right: 16px;
      width: 20px;
    }
    .hamburger-menu {
      width: 25px;

      span {
        margin-bottom: 0.3rem;
        background: black;
        height: 2px;
        width: 100%;
        display: block;
      }
    }
    .hamburger-menu-close {
      position: absolute;
      display: none;
      opacity: 0.5;
      svg {
        @media screen and (max-width: 768px) {
          width: 56px;
        }
        @media screen and (max-width: 425px) {
          margin-right: 16px;
          width: 48px;
        }
      }
    }
  }
`

export default Header
