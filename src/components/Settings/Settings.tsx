import { Col, Row, Slider, Typography } from "antd";
import React from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";
import { SettingsContext } from "../../context/settings-context";

import "./Settings.scss";

const SettingsRow = styled(Row)`
  padding: 20px 0;
  margin-top: 15px;
`;

export const Settings: React.FC = () => {
  const { relaxMinutes, workMinutes, setRelaxMinutes, setWorkMinutes } =
    React.useContext(SettingsContext);

  return (
    <Row justify="center">
      <Col span={10}>
        <SettingsRow>
          <Col span={24}>
            <Typography.Text>Work: {workMinutes} : 00</Typography.Text>
            <ReactSlider
              value={workMinutes}
              thumbClassName="thumb-work"
              min={1}
              max={60}
              trackClassName="track-work"
              onChange={(workMin) => setWorkMinutes(workMin)}
            />
          </Col>
        </SettingsRow>
        <SettingsRow>
          <Col span={24}>
            <Typography.Text>Relax: {relaxMinutes} : 00</Typography.Text>
            <ReactSlider
              value={relaxMinutes}
              thumbClassName="thumb-relax"
              min={1}
              max={60}
              trackClassName="track-relax"
              onChange={(relaxMin) => setRelaxMinutes(relaxMin)}
            />
          </Col>
        </SettingsRow>
      </Col>
    </Row>
  );
};
