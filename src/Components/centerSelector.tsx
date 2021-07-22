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
    <Col span={12} key={center.idCenter} style={{ padding: "0.3em" }}>
      <div style={{ fontSize: "1.5em", margin: "0px" }}>
        <Card
          bordered
          hoverable
          style={{
            margin: "0px",
            cursor: "pointer",
            fontSize: "1.2em",
            marginTop: "1em",
            textOverflow: "ellipsis",
          }}
          title={center.center}
          onClick={() => setCenterSelectedData(center.idCenter)}
        >
          {center.description}
        </Card>
      </div>
    </Col>
  ));

  return (
    <>
      <Row
        gutter={8}
        justify="space-around"
        align="middle"
        style={{
          margin: "1em",
          backgroundColor: "#d9d9d9",
          borderRadius: "2em",
        }}
      >
        <Col span={24} style={{ paddingTop: "1em", paddingBottom: "1em" }}>
          <Title
            level={1}
            style={{ padding: "0px", margin: "0px", paddingTop: "0.2em" }}
          >
            Selecciona un centro
          </Title>
        </Col>
      </Row>
      <Row gutter={8} justify="space-around" align="middle">
        {cardCenter}
      </Row>
    </>
  );
};
export default CenterSelector;
