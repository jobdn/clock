import { PlayCircleFilled } from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";

export const PlayButton: React.FC = () => {
  return (
    <Tooltip title="Play">
      <PlayCircleFilled onClick={() => console.log("play")} />
    </Tooltip>
  );
};
