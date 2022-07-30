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
          {projects.map(project => {
            return (
              <div className="case" key={project.id}>
                <div className="case-details">
                  <span>{project.subtitle}</span>
                  <h2>{project.title}</h2>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default Cases
