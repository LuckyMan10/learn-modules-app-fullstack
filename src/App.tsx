import React from "react";
import "./fonts.scss";
import 'antd/dist/antd.css';
import {Header} from "@/components/header/index";
import {AuthModal} from "@/components/authModal/index";
import Styled from "styled-components";

const StyledBody = Styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10%;
`


export default function App() {

  return (
    <div>
      <Header />
      <StyledBody>
        <AuthModal />
      </StyledBody>
    </div>
  );
}
