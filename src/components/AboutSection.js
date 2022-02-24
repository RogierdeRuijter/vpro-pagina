import { useState } from "react";
import styled from "styled-components";
import about from "../assets/about.json";
import Section from "./Section";

const Wrapper = styled(Section)`
  padding-top: 1rem;
  padding-left: 20%;
  padding-right: 2rem;
  background-color: lightgray;
  color: black;
  height: auto;
`;

const ReadMoreContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Arrow = styled.svg`
  ${(props) => props.show && "transform: rotate(90deg);"}
`;

const ReadMore = styled.div`
  margin-left: 0.5rem;
`;

const AdditionalInfoContainer = styled.aside`
  padding-bottom: 4rem;
  min-height: 20rem;
`;

function AboutSection() {
  const [show, setShow] = useState(false);
  return (
    <Wrapper>
      <header>
        <h1>{about.title}</h1>
        <p>{about.intro}</p>
        <ReadMoreContainer
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          <Arrow
            show={show}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </Arrow>
          <ReadMore>Lees verder</ReadMore>
        </ReadMoreContainer>

        <AdditionalInfoContainer>
          {show && (
            <>
              <p>{about.additionalInfo.section1}</p>
              <p>{about.additionalInfo.section2}</p>
              <p>{about.additionalInfo.section3}</p>
            </>
          )}
        </AdditionalInfoContainer>
      </header>
    </Wrapper>
  );
}

export default AboutSection;
