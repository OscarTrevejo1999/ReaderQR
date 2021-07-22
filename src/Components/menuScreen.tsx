import {
  CameraFilled,
  LeftCircleOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
// import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { menuAtom, positionSelected, qrCode } from "../recoil/atoms";
import FooterInfo from "./footerInfo";
import QrReaderCustom from "./qrReader";

const { Title } = Typography;

export const MenuScreen = () => {
  const [menuAtomData, setMenuAtomData] = useRecoilState(menuAtom);
  const [positionSelectedData, setPositionSelectedData] =
    useRecoilState(positionSelected);
  const [qrReadData, setQrReadData] = useRecoilState(qrCode);
  const [delay, setDelay] = useState(true);
  const [changeCamera, setChangeCamera] = useState(true);

  const handleBack = () => {
    setDelay(true);
    setQrReadData("");
    setMenuAtomData({
      menu: "",
      id: "",
      hc: "",
      date: "",
      extra: [{}],
    });
  };

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
        <Col span={24} style={{ display: "contents" }}>
          <Col
            span={8}
            style={{
              paddingTop: "1em",
              paddingBottom: "0.5em",
              textAlignLast: "left",
            }}
          >
            <LeftCircleOutlined
              onClick={() => {
                handleBack();
                setPositionSelectedData("");
              }}
              style={{ fontSize: "4.5em", color: "grey", marginLeft: "0.5em" }}
            />
          </Col>
          <Col
            span={8}
            style={{
              paddingTop: "1em",
              paddingBottom: "0.5em",
              textAlignLast: "center",
            }}
          >
            <CameraFilled
              onClick={() => {
                setChangeCamera(!changeCamera);
              }}
              style={{ fontSize: "4.5em", color: "grey" }}
            />
          </Col>
          <Col
            span={8}
            style={{
              paddingTop: "1em",
              paddingBottom: "0.5em",
              textAlignLast: "right",
            }}
          >
            <ReloadOutlined
              onClick={() => {
                handleBack();
              }}
              style={{ fontSize: "4.5em", color: "grey", marginRight: "0.5em" }}
            />
          </Col>
        </Col>
      </Row>
      <Row gutter={8} justify="space-around" align="middle">
        <Col span={24} style={{ paddingTop: "2em" }}>
          <QrReaderCustom
            changeCamera={changeCamera}
            setDelay={setDelay}
            delay={delay}
          />
        </Col>

        <Col span={24} style={{ paddingTop: delay ? "13em" : "1em" }}>
          {qrReadData !== "" && (
            <Title level={1} style={{ color: "grey" }}>
              ID: {qrReadData}
            </Title>
          )}
          <Title level={1}>{menuAtomData?.menu}</Title>
        </Col>
      </Row>
      {positionSelectedData === "Dietista" ? (
        <div style={{ justifyContent: "center" }}>
          {!delay && <FooterInfo data={menuAtomData?.extra} />}
        </div>
      ) : null}
    </>
  );
};

export default MenuScreen;
