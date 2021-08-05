// import axios from "axios";
import { Col, Row, Typography } from "antd";
import React from "react";
import { useRecoilValue } from "recoil";
import { menuSoapCall, user } from "../recoil/atoms";
import QrReaderCustom from "./qrReader";

const { Title } = Typography;

export const MenuScreen = () => {
  const userData = useRecoilValue(user);
  const menuDataSoap = useRecoilValue(menuSoapCall);

  return (
    <Row gutter={8} justify="space-around" align="middle">
      {userData === "" && (
        <Col
          span={20}
          style={{
            display: "flex",
            placeContent: "center",
            marginBottom: "1em",
            backgroundColor: "#d9d9d9",
            borderRadius: "2em",
          }}
        >
          <Title
            level={1}
            style={{ margin: "0px", padding: "0.2em", paddingRight: "1em" }}
          >
            Escanea tu usuario
          </Title>
        </Col>
      )}
      {userData !== "" && Object.keys(menuDataSoap).length === 0 && (
        <Col
          span={20}
          style={{
            display: "flex",
            placeContent: "center",
            marginBottom: "1em",
            backgroundColor: "#d9d9d9",
            borderRadius: "2em",
          }}
        >
          <Title
            level={1}
            style={{ margin: "0px", padding: "0.2em", paddingRight: "1em" }}
          >
            Escanea el menú
          </Title>
        </Col>
      )}
      {Object.keys(menuDataSoap).length === 0 && <QrReaderCustom />}
    </Row>
  );
};

export default MenuScreen;
