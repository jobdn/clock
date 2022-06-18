import React from "react";
import { Col, Progress, Row } from "antd";
import { PauseButton } from "../PauseButton";
import { PlayButton } from "../PlayButton";
import { SettingsButton } from "../SettingsButton";

export const Timer: React.FC = () => {
  const [time, setTime] = React.useState<number>(0);
  const [isStarted, setIsStarted] = React.useState<boolean>(false);
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
              trailColor="#d0d0d0"
              width={300}
            />
          </Col>
        </Row>
        <Row style={{ margin: "40px 0 20px" }} justify="center">
          <Row>
            {isStarted ? (
              <PauseButton handleClick={setIsStarted} />
            ) : (
              <PlayButton handleClick={setIsStarted} />
            )}
          </Row>
        </Row>
        <Row justify="center">
          <Col>
            <SettingsButton />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
