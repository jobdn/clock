import { Col, Row, Slider, Typography } from "antd";
import React from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";

import "./Settings.scss";

const SettingsRow = styled(Row)`
  padding: 20px 0;
`;

export const Settings: React.FC = () => {
  return (
    <Row justify="center">
      <Col span={10}>
        <SettingsRow>
          <Col span={24}>
            <Typography.Text>Work: </Typography.Text>
            <ReactSlider
              thumbClassName="thumb-work"
              min={1}
              max={120}
              trackClassName="track-work"
              onChange={(e) => {
                console.log(e);
              }}
            />
          </Col>
        </SettingsRow>
        <SettingsRow>
          <Col span={24}>
            <Typography.Text>Relax: </Typography.Text>
            <ReactSlider
              thumbClassName="thumb-relax"
              min={1}
              max={60}
              trackClassName="track-relax"
              onChange={(e) => {
                console.log(e);
              }}
            />
          </Col>
        </SettingsRow>
      </Col>
    </Row>
  );
};
