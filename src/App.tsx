import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";

import { Timer } from "./components/Timer";
import { Settings } from "./components/Settings";
import { SettingsContext } from "./context/settings-context";

import "./App.scss";

const StyledApp = styled(Row)`
  height: 100vh;
  background-color: #2a3141;
`;

const App: React.FC = () => {
  const [workMinutes, setWorkMinutes] = React.useState<number>(0);
  const [relaxMinutes, setRelaxMinutes] = React.useState<number>(0);
  const [showSettings, setShowSettings] = React.useState<boolean>(false);

  return (
    <SettingsContext.Provider
      value={{
        workMinutes,
        relaxMinutes,
        setWorkMinutes,
        setRelaxMinutes,
        setShowSettings,
      }}
    >
      <StyledApp align="middle" justify="center">
        <Col span={24}>{showSettings ? <Settings /> : <Timer />}</Col>
      </StyledApp>
    </SettingsContext.Provider>
  );
};

export default App;
