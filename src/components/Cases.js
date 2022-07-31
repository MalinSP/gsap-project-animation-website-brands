import React from "react"
import styled from "styled-components"

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import { caseStudies as projects } from "../utils/caseStudies.js"

const Cases = () => {
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <BsArrowLeftShort />
          </div>
          <div className="cases-arrow next">
            <BsArrowRightShort />
          </div>
        </div>
        <div className="row">
          {projects.map(project => (
            <div className="case" key={project.id}>
              <div className="case-details">
                <span>{project.subtitle}</span>
                <h2>{project.title}</h2>
              </div>
              <div className="case-image">
                <img src={project.img} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 50vh;
  height: calc(var(--vh, 1vh) * 50);
  .cases-navigation {
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 6;
    padding: 32px;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
      display: none;
    }
    .cases-arrow {
      background: rgba(0, 0, 0, 0.4);
      height: 72px;
      width: 72px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: white;
        width: 30px;
        height: 30px;
      }
      &.disabled {
        opacity: 0.3;
      }
    }
  }
  .row {
    padding: 0;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .case {
      position: relative;
      background: black;
      cursor: pointer;
      &:hover {
        .case-image {
          opacity: 0.4;
        }
      }
      .case-details {
        width: 33.3333vw;
        height: 50vh;
        height: calc(var(--vh, 1vh) * 50);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 32px;
        box-sizing: border-box;
        z-index: 1;
        position: relative;
        @media screen and (max-width: 768px) {
          width: 100vw;
        }
        @media screen and (max-width: 425px) {
          padding: 16px;
        }
        span {
          margin-top: 156px;
          font-size: 1.6rem;
          opacity: 0.8;
          color: white;
          font-weight: 600;
          @media screen and (max-width: 1200px) {
            font-size: 1.4rem;
          }
          @media screen and (min-width: 768px) {
            font-size: 1.4rem;
          }
          @media screen and (max-width: 425px) {
            font-size: 1.2rem;
            line-height: 2.2rem;
          }
        }
        h2 {
          font-size: 2.4rem;
          line-height: 3.4rem;
          width: 85%;
          margin-top: 16px;
          color: white;
          @media screen and (max-width: 1200px) {
            font-size: 2rem;
            line-height: 2.4rem;
          }
          @media screen and (min-width: 768px) {
            font-size: 2rem;
            line-height: 2.4rem;
          }
          @media screen and (max-width: 425px) {
            font-size: 1.7rem;
            line-height: 2.2rem;
            margin-top: 8px;
          }
        }
      }
      .case-image {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        opacity: 0.65;
        transition: 0.4s cubic-bezier(0.6, -0.05, 0.1, 0.99);
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
`

export default Cases
