import { SettingFilled } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { SettingsContext } from "../../context/settings-context";

const StyledSettingsBtn = styled(Row)`
  cursor: pointer;
  margin-top: 20px;
  .settings-btn__icon {
    margin-right: 10px;
  }

  transition: 0.4s;
  &:hover {
    scale: 1.1;
  }
`;

export const SettingsButton = () => {
  const { setShowSettings } = React.useContext(SettingsContext);

  return (
    <StyledSettingsBtn
      align="middle"
      justify="center"
      onClick={() => {
        setShowSettings((isShow) => !isShow);
      }}
    >
      <Col className="settings-btn__icon">
        <SettingFilled />
      </Col>
      <Col>
        <Typography.Text className="settings-label">Settings</Typography.Text>
      </Col>
    </StyledSettingsBtn>
  );
};
