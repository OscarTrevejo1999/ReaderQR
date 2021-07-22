import { Card, Col, Row } from "antd";
import React from "react";

interface FooterInfoProps {
  data: any;
}

export const FooterInfo = ({ data }: FooterInfoProps) => {
  const dataFooter = data.map((item: any) => {
    return (
      <Col span={6} key={item?.description + item?.title}>
        <Card title={item.title}>
          <p>{item.description}</p>
        </Card>
      </Col>
    );
  });
  return (
    <Row style={{ justifyContent: "center", alignItems: "center" }} gutter={16}>
      {dataFooter}
    </Row>
  );
};

export default FooterInfo;
