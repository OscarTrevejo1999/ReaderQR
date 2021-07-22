import { HeartOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
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
      <Col span={12} key={position.idPosition} style={{ padding: "0.3em" }}>
        <div style={{ fontSize: "1.5em", margin: "0px" }}>
          <Card
            style={{
              margin: "0px",
              cursor: "pointer",
              fontSize: "1.2em",
              marginTop: "1em",
              textOverflow: "ellipsis",
            }}
            title={
              position.position === "Dietista" ? (
                <>
                  {position.position}
                  <HeartOutlined style={{ paddingLeft: "1em" }} />
                </>
              ) : (
                position.position
              )
            }
            bordered
            hoverable
            onClick={() => setPositionSelectedData(position.position)}
          >
            {position.description}
          </Card>
        </div>
      </Col>
    );
  });

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
        <Col span={3} style={{ paddingTop: "1em", paddingBottom: "0.5em" }}>
          <LeftCircleOutlined
            onClick={() => setCenterSelectedData("")}
            style={{ fontSize: "4.5em", color: "grey" }}
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
      </Row>
      <Row gutter={8} justify="space-around" align="middle">
        {cardPosition}
      </Row>
    </>
  );
};
export default PositionSelector;
