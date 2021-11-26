import React from "react";
import Styled from "styled-components";
import "./fonts.scss";

const StyledApp = Styled.div`
    display: flex;
    justify-content: center;
    .text {
        h1 {
          font-family: "Roboto";
        }
        p {
          font-family: 'M PLUS 1 Code';
        }
        background-color: black;
        color: white;
        margin-top: 20px;
        font-size: 30px;
        font-weight: 600;
        opacity: 0.8;
    }
`;

export default function App() {
  return (
    <StyledApp>
      <section className="text">
      <h1>Hello, it's React project</h1>
      <p>M PLUS 1 code font</p>
      </section>

    </StyledApp>
  );
}
