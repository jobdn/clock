import { Col, Row, Tooltip, Typography } from "antd";
import styled from "styled-components";

const StyledBtn = styled(Tooltip)`
  cursor: pointer;
  transition: 0.4s;
  padding: 10px 20px;
  background-color: #3a424f;
  border-radius: 20px;
  &:hover {
    scale: 1.1;
  }

  svg {
    position: relative;
    top: 3px;
  }
`;

interface BtnWithLabelProps {
  title: string;
  icon: React.ReactElement;
  label: string;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

export const ButtonWithLabel: React.FC<BtnWithLabelProps> = ({
  icon,
  label,
  title,
  handleClick,
}) => {
  return (
    <StyledBtn title={title}>
      <Row align="middle" justify="center" onClick={handleClick} gutter={8}>
        <Col>{icon}</Col>
        <Col>
          <Typography.Text>{label}</Typography.Text>
        </Col>
      </Row>
    </StyledBtn>
  );
};
