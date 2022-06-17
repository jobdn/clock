import { Col, Progress, Row } from "antd";
import React from "react";

export const Timer: React.FC = () => {
  const [time, setTime] = React.useState<number>(0);

  React.useEffect(() => {
    const tick = () => {
      setTime((t) => t + 1);
    };

    const intervalId = setInterval(() => {
      tick();
    }, 100);

    console.log("INTERVAL ID: ", intervalId);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Row align="middle" justify="center">
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
  );
};
