import React from "react";
import { Col, Progress, Row } from "antd";
import Sound from "react-sound";

import { PauseButton } from "../PauseButton";
import { PlayButton } from "../PlayButton";
import { SettingsButton } from "../SettingsButton";
import { SettingsContext } from "../../context/settings-context";

import CompleteSound from "../../assets/complete.wav";

type AvailableModes = "work" | "relax";

const RED = "#ff444a";
const GREEN = "#01e888";

export const Timer: React.FC = () => {
  const { workMinutes, relaxMinutes } = React.useContext(SettingsContext);

  const [isStarted, setIsStarted] = React.useState<boolean>(false);
  const [playStatus, setPlayStatus] = React.useState<
    "PLAYING" | "STOPPED" | "PAUSED"
  >("STOPPED");
  const [mode, setMode] = React.useState<AvailableModes>("work");
  const [secondsLeft, setSecondsLeft] = React.useState<number>(0);

  const isStartedRef = React.useRef(isStarted);
  const secondsLeftRef = React.useRef(secondsLeft);
  const modeRef = React.useRef(mode);
  const strokeColorRef = React.useRef(RED);

  const initTimer = () => {
    secondsLeftRef.current =
      (modeRef.current === "work" ? workMinutes : relaxMinutes) * 60;
    strokeColorRef.current = modeRef.current === "work" ? RED : GREEN;
    setSecondsLeft(secondsLeftRef.current);
  };

  const switchMode = () => {
    const nextMode: AvailableModes =
      modeRef.current === "work" ? "relax" : "work";
    const nextSecondsLeft =
      (nextMode === "work" ? workMinutes : relaxMinutes) * 60;
    strokeColorRef.current = nextMode === "work" ? RED : GREEN;

    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSecondsLeft);
    secondsLeftRef.current = nextSecondsLeft;

    setIsStarted(false);
    isStartedRef.current = false;
  };

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  React.useEffect(() => {
    initTimer();

    const intervalId = setInterval(() => {
      if (!isStartedRef.current) return;
      if (secondsLeftRef.current === 0) {
        setPlayStatus("PLAYING");
        return switchMode();
      }
      tick();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [workMinutes, relaxMinutes]);

  const getPercent = () => {
    const totalSeconds =
      (modeRef.current === "work" ? workMinutes : relaxMinutes) * 60;
    const percentLeft = (secondsLeftRef.current / totalSeconds) * 100;
    return percentLeft;
  };

  const display = (percent?: number) => {
    const min = Math.floor(secondsLeft / 60);
    let sec = secondsLeftRef.current % 60;
    return `${min} : ${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <Row align="middle" justify="center">
      <Col>
        <Sound
          url={CompleteSound}
          playStatus={playStatus}
          onFinishedPlaying={() => setPlayStatus("STOPPED")}
        />
        <Row>
          <Col>
            <Progress
              format={display}
              percent={getPercent()}
              type="circle"
              strokeWidth={12}
              strokeColor={strokeColorRef.current}
              trailColor="#d0d0d0"
              width={300}
            />
          </Col>
        </Row>
        <Row style={{ margin: "40px 0 20px" }} justify="center">
          <Row>
            {isStarted ? (
              <PauseButton
                handleClick={() => {
                  setIsStarted(false);
                  isStartedRef.current = false;
                }}
              />
            ) : (
              <PlayButton
                handleClick={() => {
                  setIsStarted(true);
                  isStartedRef.current = true;
                }}
              />
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
