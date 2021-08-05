import { Col, Divider, Row, Typography } from "antd";
import React, { ReactElement, useState } from "react";

interface SectionHeaderProps {
  title: string | ReactElement;
  iconComponent: Function;
  children: ReactElement;
  hideable?: boolean;
  plato?: boolean;
}

const { Title } = Typography;

export const SectionHeader = ({
  title,
  iconComponent: IconComponent,
  children,
  hideable = false,
  plato = false,
}: SectionHeaderProps) => {
  const [isHided, setIsHide] = useState(true);
  const handleHide = () => {
    setIsHide(!isHided);
  };

  return (
    <>
      <Title
        onClick={handleHide}
        level={3}
        className="title"
        style={{
          cursor: "pointer",
          color: hideable && isHided ? "#e0e0e0" : "#999",
          fontStyle: hideable && isHided ? "italic" : "normal",
          textTransform: "capitalize",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Col style={{ display: "flex", margin: "0em 0.5em 0.2em" }}>
            <IconComponent />
          </Col>
          {title}
        </div>
        <Divider style={{ marginTop: "0em" }} />
      </Title>

      {hideable && isHided ? (
        <></>
      ) : (
        <Row
          style={{
            placeContent: plato ? "center" : "flex-end",
            display: "block",
            textAlignLast: plato ? "center" : "start",
          }}
        >
          {children}
        </Row>
      )}
    </>
  );
};
