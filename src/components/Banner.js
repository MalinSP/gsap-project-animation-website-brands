import { Link } from "gatsby"
import React from "react"
import { BsArrowRight } from "react-icons/bs"
import styled from "styled-components"

const Banner = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Creating unique brands is</span>
            </div>
            <div className="line">
              <span>what we do.</span>
            </div>
          </h2>
          <div className="btn-row">
            <Link to="/about">
              More about us <BsArrowRight className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 50vh;
  height: calc(var(--vh, 1vh) * 50);
  background-color: white;
  .row {
    flex-direction: column;
    justify-content: center;
    gap: 2.2rem;
    h2 {
      font-size: 3rem;
      line-height: 4.2rem;
      font-weight: 700;
      z-index: 10;
      font-family: "Josefin Sans", sans-serif;
      color: white;
      mix-blend-mode: difference;
      @media screen and (max-width: 768px) {
        font-size: 2.4rem;
        line-height: 3rem;
      }
      @media screen and (max-width: 425px) {
        margin-top: 72px;
        font-size: 1.7rem;
        line-height: 2.2rem;
      }
      .line {
        margin-bottom: 8px;
        height: 56px;
        position: relative;
        overflow: hidden;
        @media screen and (max-width: 768px) {
          height: 48px;
        }
        @media screen and (max-width: 425px) {
          height: 32px;
        }

        span {
          position: absolute;
        }
      }
    }
    .btn-row {
      width: 256px;
      position: relative;
      z-index: 2;

      a {
        font-size: 1.6rem;
        color: black;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: 600;
        font-family: "Josefin Sans", sans-serif;
        @media screen and (max-width: 768px) {
          font-size: 1.3rem;
        }
        @media screen and (max-width: 425px) {
          font-size: 1.3rem;
        }
        svg {
          margin-left: 16px;
          border: 2px solid black;
          padding: 5px;
          width: 30px;
          height: 30px;
          border-radius: 100px;
          transition: 0.4s ease-in-out;
          @media screen and (max-width: 768px) {
            padding: 6px;
            width: 28px;
            height: 28px;
          }
          @media screen and (max-width: 425px) {
            padding: 4px;
            width: 25px;
            height: 25px;
          }
        }
        &:hover {
          svg {
            background: black;
            color: white;
          }
        }
      }
    }
  }
`

export default Banner
