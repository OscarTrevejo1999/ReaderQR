import {
  HeartOutlined,
  InfoCircleOutlined,
  PicLeftOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { Card, Col, List, Row, Typography } from "antd";
import React from "react";
import { useRecoilValue } from "recoil";
import "../App.css";
import { menu } from "../recoil/atoms";
import QrReaderCustom from "./qrReader";
import { SectionHeader } from "./sectionHeader";
const { Title } = Typography;
export const CardsMenu = (data: any) => {
  const menuData = useRecoilValue(menu);
  const menuDataSplit = menuData.split("|");
  const idCama = menuDataSplit[0];

  return (
    <div className={"Padding"} style={{ marginBottom: "2em" }}>
      <Row gutter={16}>
        <Col span={21}>
          <SectionHeader
            plato={true}
            title="Plato"
            iconComponent={HeartOutlined}
          >
            <div>
              {data.data.Plato !== undefined ? (
                data.data.Plato.map((item: any) => {
                  return (
                    <Title
                    key={item}
                      level={1}
                      style={{
                        fontSize: "3em",
                        color: "black",
                      }}
                    >
                      {item}
                    </Title>
                  );
                })
              ) : (
                <Title
                  level={1}
                  style={{
                    fontSize: "3em",
                    color: "red",
                  }}
                >
                  No se ha encontrado ningun plato con el ID proporcionado
                </Title>
              )}
            </div>
          </SectionHeader>
        </Col>
        <Col span={3} style={{ paddingTop: "5em" }}>
          <QrReaderCustom />
        </Col>
        <Col span={12}>
          <SectionHeader title="Alergias" iconComponent={WarningOutlined}>
            <List
              style={{
                fontSize: "2em",
                textAlignLast: "start",
                textAlign: "start",
              }}
              size="large"
              bordered
              dataSource={data?.data?.Alergias}
              renderItem={(item: any) => <List.Item>{item}</List.Item>}
            />
          </SectionHeader>
        </Col>
        <Col span={12}>
          <SectionHeader
            title="Observaciones"
            iconComponent={InfoCircleOutlined}
          >
            <List
              style={{
                fontSize: "2em",
                textAlignLast: "start",
                textAlign: "start",
              }}
              size="large"
              bordered
              dataSource={data?.data?.Observaciones}
              renderItem={(item: any) => <List.Item>{item}</List.Item>}
            />
          </SectionHeader>
        </Col>
        <Col span={24} style={{ marginTop: "1em" }}>
          <SectionHeader
            plato={true}
            title="Extra"
            iconComponent={PicLeftOutlined}
          >
            <div style={{ display: "flex" }}>
              <Col span={6}>
                <Card title="Nombre Ingesta" className="Card">
                  {data.data.NombreIngesta}
                </Card>
              </Col>
              <Col span={6}>
                <Card title="Nombre Dieta" className="Card">
                  {data.data.NombreDieta}
                </Card>
              </Col>
              <Col span={6}>
                <Card title="Sal" className="Card">
                  {data.data.TomaSal === true ? "Si" : "No"}
                </Card>
              </Col>
              <Col span={6}>
                <Card title="Cama" className="Card">
                  {idCama}
                </Card>
              </Col>
            </div>
          </SectionHeader>
        </Col>
      </Row>
    </div>
  );
};
export default CardsMenu;
