import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <Wrapper className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/">AGENCY.</a>
          </div>
          <div className="nav">
            <span></span>
            <span></span>
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
  .nav {
    width: 25px;
    @media screen and (max-width: 425px) {
      height: 20px;
    }
    span {
      margin-bottom: 0.3rem;
      background: black;
      height: 2px;
      width: 100%;
      display: block;
    }
  }
`

export default Header
