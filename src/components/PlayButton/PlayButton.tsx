import { PlayCircleFilled } from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";

interface PlayButtonProps {
  handleClick: () => void;
}

export const PlayButton: React.FC<PlayButtonProps> = ({ handleClick }) => {
  return (
    <Tooltip title="Play">
      <PlayCircleFilled className="big" onClick={handleClick} />
    </Tooltip>
  );
};
