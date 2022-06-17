import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";

import { Timer } from "./components/Timer";
import { Settings } from "./components/Settings";

import "./App.scss";

const StyledApp = styled(Row)`
  height: 100vh;
  background-color: #2a3141;
`;

const App: React.FC = () => {
  return (
    <StyledApp align="middle" justify="center">
      <Col span={24}>
        <Timer />
        <Settings />
      </Col>
    </StyledApp>
  );
};

export default App;
