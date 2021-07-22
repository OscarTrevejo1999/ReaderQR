import { Col, Row } from "antd";
import React from "react";
import { Typography } from "antd";
import logo from "./../Aramark_logo.png";
import { useRecoilValue } from "recoil";
import { menuAtom, positionSelected } from "../recoil/atoms";

const { Title } = Typography;

export const HeaderSuperior = () => {
  const menuAtomData = useRecoilValue(menuAtom);
  const positionSelectedData = useRecoilValue(positionSelected);
  return (
    <Row style={{ alignItems: "center" }}>
      <Col span={6}>
        <img src={logo} alt="Logo" style={{ width: "11em" }} />
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
