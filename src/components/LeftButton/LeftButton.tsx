import { LeftCircleFilled } from "@ant-design/icons";
import React from "react";
import { ButtonWithLabel } from "../../common/BtnWithLabel/BtnWithLabel";
import { SettingsContext } from "../../context/settings-context";

export const LeftButton: React.FC = () => {
  const { setShowSettings } = React.useContext(SettingsContext);
  return (
    <ButtonWithLabel
      handleClick={() => {
        setShowSettings((isShow) => !isShow);
      }}
      icon={<LeftCircleFilled />}
      label="Go back"
      title="Left back"
    />
  );
};
