import { Col, Image, Row, Typography } from "antd";
import React from "react";
import { useRecoilValue } from "recoil";
import { user } from "../recoil/atoms";
import logo from "./../Aramark_logo.png";

const { Title } = Typography;

export const HeaderSuperior = () => {
  const userData = useRecoilValue(user);
  const informationSplit = userData.split("|");

  return (
    <Row gutter={8} justify="space-around" align="middle">
      <Col span={4} style={{ display: "inherit" }}>
        <Image preview={false} width={"12em"} src={logo} alt="Logo" />
      </Col>

      <Col span={10}>
        <Title style={{ color: "white" }} level={2}>
          {userData !== "" ? informationSplit[1] : ""}
        </Title>
      </Col>
      <Col span={10}>
        <Title style={{ color: "white" }} level={2}>
          {userData !== ""
            ? informationSplit[2] === "0"
              ? "Position: Dietista"
              : " Position: " + informationSplit[2]
            : ""}
        </Title>
      </Col>
    </Row>
  );
};

export default HeaderSuperior;
