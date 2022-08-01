import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navigation = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <Link to="/case-studies" exact>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/approach" exact>
                  Approach
                </Link>
              </li>
              <li>
                <Link to="/services" exact>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" exact>
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <Link to="/contact" exact>
                    Get in touch with us
                  </Link>
                </li>
                <li>
                  <Link to="/audit" exact>
                    Get a free audit
                  </Link>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarter</li>
                <li>Route du Jura 49</li>
                <li>1700 Fribourg</li>
                <li>Switzerland</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+41 (0) 79 510 28 70</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  left: 0;
  top: -1px;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  position: fixed;
  overflow: hidden;
  background: #fff3d8;
  a {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      display: block;
      margin-top: 5px;
      right: 0;
      background: black;
      transition: 0.4s ease;
    }
    &:hover {
      color: pink;
      &:after {
        width: 100%;
        left: 0;
        background: black;
      }
    }
  }
  .nav-columns {
    transform: translateY(125px);
    display: flex;
    padding: 0 32px;
    @media screen and (max-width: 654px) {
      flex-direction: column;
      @media screen and (max-width: 425px) {
        padding: 0 16px;
      }
    }
    .nav-column {
      width: 45%;
      @media screen and (max-width: 654px) {
        width: 100%;
      }
      &:last-child {
        width: 55%;
       @media screen and (max-width: 654px) {
          width: 100%;
        }
      }
      .nav-label {
        margin-bottom: 3rem;
        font-size: 1.2rem;
        @media screen and (max-width: 768px) {
          font-size: 1rem;
          margin-bottom: 1.4rem;
        }
        @media screen and (max-width: 425px) {
          font-size: 0.875rem;
          margin-bottom: 1.2rem;
        }
      }
      .nav-infos {
        display: flex;
        flex-wrap: wrap;
        @media screen and (max-width: 654px) {
          justify-content: space-between;
        }
        .nav-info {
          padding: 0;
          width: 50%;
          &:nth-child(2),
          &:nth-child(3) {
           @media screen and (max-width: 654px) {
              display: none;
            }
          }
          .nav-info-label {
            font-weight: 600;
          }
          li {
            font-weight: 300;
            list-style: none;
            font-size: 1.4rem;
            margin-bottom: 1.2rem;
            @media screen and (max-width: 768px) {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
            @media screen and (max-width: 425px) {
              font-size: 1rem;
              margin-bottom: 0.875rem;
            }
            a {
              text-decoration: none;
              color: black;
            }
          }
        }
      }
      .nav-links {
        padding: 0;
        margin: 0;
        li {
          list-style: none;
          margin-bottom: 2.4rem;
          @media screen and (max-width: 425px) {
            margin-bottom: 1.6rem;
          }
          a {
            font-weight: 600;
            font-size: 2.8rem;
            text-decoration: none;
            color: black;
            @media screen and (max-width: 425px) {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
}
`

export default Navigation
