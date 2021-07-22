import { LeftCircleOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import { useRecoilState, useSetRecoilState } from "recoil";
import { positionSelected } from "../recoil/atoms";
import { centerSelected } from "./../recoil/atoms";

const { Title } = Typography;
interface PositionSelectorProps {
  data: any;
}

export const PositionSelector = ({ data }: PositionSelectorProps) => {
  const setPositionSelectedData = useSetRecoilState(positionSelected);
  const [centerSelectedData, setCenterSelectedData] =
    useRecoilState(centerSelected);

  const filterPositions = data.filter(
    (item: any) => item.idCenter === centerSelectedData
  );

  const cardPosition = filterPositions[0]?.posiciones?.map((position: any) => {
    return (
      <Col span={12} key={position.idPosition} style={{ padding: "1em" }}>
        <p style={{ fontSize: "1.5em", height: "7em" }}>
          <Card
            style={{
              cursor: "pointer",
              fontSize: "1.2em",
              height: "7em",
              marginTop: "1em",
            }}
            title={position.position}
            bordered={false}
            onClick={() => setPositionSelectedData(position.position)}
          >
            {position.description}
          </Card>
        </p>
      </Col>
    );
  });

  return (
    <Row gutter={16} style={{ alignItems: "center" }}>
      <Col span={3} style={{ paddingTop: "1em", paddingBottom: "0.5em" }}>
        <LeftCircleOutlined
          onClick={() => setCenterSelectedData("")}
          style={{ fontSize: "5em", color: "grey" }}
        />
      </Col>
      <Col span={18}>
        <Title
          level={1}
          style={{ padding: "0px", margin: "0px", paddingTop: "0.2em" }}
        >
          Selecciona una posición
        </Title>
      </Col>
      <Col span={3} />
      {cardPosition}
    </Row>
  );
};
export default PositionSelector;
