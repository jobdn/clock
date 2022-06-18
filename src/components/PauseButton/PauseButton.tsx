import { PauseCircleFilled } from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";

//TODO: remove repeating myselft in props of PlayButton component and here
interface PauseButtonProps {
  handleClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PauseButton: React.FC<PauseButtonProps> = ({ handleClick }) => {
  return (
    <Tooltip title="Pause">
      <PauseCircleFilled className="big" onClick={() => handleClick(false)} />
    </Tooltip>
  );
};
