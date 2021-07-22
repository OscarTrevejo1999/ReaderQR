import { Col, Row } from "antd";
import React from "react";
import { Typography, Image } from "antd";
import logo from "./../Aramark_logo.png";
import { useRecoilValue } from "recoil";
import { menuAtom, positionSelected } from "../recoil/atoms";

const { Title } = Typography;

export const HeaderSuperior = () => {
  const menuAtomData = useRecoilValue(menuAtom);
  const positionSelectedData = useRecoilValue(positionSelected);
  return (
    <Row gutter={8} justify="space-around" align="middle" >
      <Col span={6} style={{ display: "inherit" }}>
        <Image preview={false} width={"12em"} src={logo} alt="Logo" />
      </Col>
      <Col span={4}>
        <Title style={{ color: "white" }} level={4}>
          {positionSelectedData}
        </Title>
      </Col>
      <Col span={3}>
        <Title style={{ color: "white" }} level={4}>
          {menuAtomData.id}
        </Title>
      </Col>
      <Col span={5}>
        <Title style={{ color: "white" }} level={4}>
          {menuAtomData.hc !== "" ? " HC:" + menuAtomData.hc : ""}
        </Title>
      </Col>
      <Col span={6}>
        <Title style={{ color: "white" }} level={4}>
          {menuAtomData.date}
        </Title>
      </Col>
    </Row>
  );
};

export default HeaderSuperior;
