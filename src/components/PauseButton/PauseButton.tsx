import { PauseCircleFilled } from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";

export const PauseButton: React.FC = () => {
  return (
    <Tooltip title="Pause">
      <PauseCircleFilled onClick={() => console.log("pause")} />
    </Tooltip>
  );
};
