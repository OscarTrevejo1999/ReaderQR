import { Card, Col, Row, Typography } from "antd";
import React from "react";
import { useSetRecoilState } from "recoil";
import { centerSelected } from "../recoil/atoms";

const { Title } = Typography;
interface CenterSelectorProps {
  data: any;
}

export const CenterSelector = ({ data }: CenterSelectorProps) => {
  const setCenterSelectedData = useSetRecoilState(centerSelected);
  const cardCenter = data?.map((center: any) => (
    <Col span={12} key={center.idCenter} style={{ padding: "1em" }}>
      <p style={{ fontSize: "1.5em", height: "7em" }}>
        <Card
          style={{
            cursor: "pointer",
            fontSize: "1.2em",
            height: "7em",
            marginTop: "1em",
          }}
          title={center.center}
          bordered={false}
          onClick={() => setCenterSelectedData(center.idCenter)}
        >
          {center.description}
        </Card>
      </p>
    </Col>
  ));

  return (
    <Row gutter={16} style={{ alignItems: "center" }}>
      <Col span={3} />
      <Col span={18} style={{ paddingTop: "2em", paddingBottom: "2em" }}>
        <Title level={1}>Selecciona un centro</Title>
      </Col>
      {cardCenter}
      <Col span={3} />
    </Row>
  );
};
export default CenterSelector;
