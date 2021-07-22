import { Card, Col, Row } from "antd";
import React from "react";

interface FooterInfoProps {
  data: any;
}

export const FooterInfo = ({ data }: FooterInfoProps) => {
  const dataFooter = data.map((item: any) => {
    return (
      <Col span={6} key={item?.description + item?.title}>
        <Card title={item.title} bordered  hoverable>
          <div>{item.description}</div>
        </Card>
      </Col>
    );
  });
  return (
    <Row gutter={8} justify="space-around" align="middle">
      {dataFooter}
    </Row>
  );
};

export default FooterInfo;
