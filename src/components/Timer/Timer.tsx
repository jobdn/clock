import React from "react";
import { Col, Progress, Row } from "antd";
import { PauseButton } from "../PauseButton";
import { PlayButton } from "../PlayButton";
import { SettingsButton } from "../SettingsButton";

export const Timer: React.FC = () => {
  const [time, setTime] = React.useState<number>(0);

  React.useEffect(() => {
    // const tick = () => {
    //   setTime((t) => t + 1);
    // };
    // const intervalId = setInterval(() => {
    //   tick();
    // }, 100);
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <Row align="middle" justify="center">
      <Col>
        <Row>
          <Col>
            <Progress
              percent={time}
              type="circle"
              strokeWidth={12}
              strokeColor="red"
              width={300}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "40px" }}>
          <Col span={12} style={{ textAlign: "center" }}>
            <PlayButton />
          </Col>
          <Col span={12} style={{ textAlign: "center" }}>
            <PauseButton />
          </Col>
        </Row>
        <SettingsButton />
      </Col>
    </Row>
  );
};
