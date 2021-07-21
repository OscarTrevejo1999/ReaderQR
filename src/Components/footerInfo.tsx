import { Card, Col, Row } from "antd";
import React from "react";

interface FooterInfoProps {
  data: any;
}

export const FooterInfo = ({ data }: FooterInfoProps) => {
  const dataFooter = data.map((item: any) => {
    return (
      <Col span={6}>
        <Card title={item.title} style={{ width: 300 }}>
          <p>{item.description}</p>
        </Card>
      </Col>
    );
  });
  return (
    <Row style={{ justifyContent: "center", alignItems: "center" }}>
      {dataFooter}
    </Row>
  );
};

export default FooterInfo;
