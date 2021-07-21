import {
  CameraFilled,
  LeftCircleOutlined,
  ReloadOutlined
} from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
// import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import QrReader from "react-qr-reader";
import { useRecoilState } from "recoil";
import { menuAtom, qrRead } from "../recoil/atoms";
import FooterInfo from "./footerInfo";

const { Title } = Typography;

interface MenuScreenProps {
  setPositionSelected: any;
  positionSelected: any;
}

export const MenuScreen = ({
  setPositionSelected,
  positionSelected,
}: MenuScreenProps) => {
  const [menuAtomData, setMenuAtomData] = useRecoilState(menuAtom);
  const [qrReadData, setQrReadData] = useRecoilState(qrRead);
  const [delay, setDelay] = useState(true);
  const [changeCamera, setChangeCamera] = useState(true);

  class QrContainer extends Component {
    constructor(props: any) {
      super(props);
      this.handleScan = this.handleScan.bind(this);
    }

    handleScan = (data: any) => {
      console.log(data);
      if (data !== null) {
        setQrReadData(JSON.parse(data).id);
        setDelay(false);
      }
    };
    handleError = (err: any) => {
      console.error(err);
    };
    render() {
      const previewStyle = {
        height: 350,
        width: 500,
        display: "flex",
        justifyContent: "center",
      };

      const camStyle = {
        display: "flex",
        justifyContent: "center",
      };

      return (
        <div style={camStyle}>
          <QrReader
            delay={delay ? 1500 : false}
            showViewFinder={delay ? true : false}
            onError={this.handleError}
            onScan={this.handleScan}
            style={previewStyle}
            facingMode={changeCamera ? "user" : "environment"}
          />
        </div>
      );
    }
  }

  const QrPrueba = {
    menu: "Pure de Calabacín",
    id: "2",
    hc: "223291",
    date: "28/04/2021 - Comida",
    extra: [
      {
        title: "Otros platos",
        description: "Estofado de ternera con verduras",
      },
      {
        title: "Alergias y observaciones",
        description: "No pescado",
      },
    ],
  };

  // console.log(JSON.stringify(QrPrueba));

  const getMenu = async (id: any) => {
    // const res = await axios
    //   .get(`https://60f821159cdca0001745522a.mockapi.io`)
    //   .then((data) => data)
    //   .catch((error) => error);
    // if (res.status === 200) {
    //   setMenuAtomData(res.data);
    // } else {
    //change
    setMenuAtomData(QrPrueba);

    // }
  };
  qrReadData !== "" ? getMenu(qrReadData) : console.log({ qrReadData });

  useEffect(() => {}, [menuAtomData, delay, qrReadData]);

  return (
    <>
      <Row gutter={16} style={{ alignItems: "center" }}>
        <Col
          span={3}
          style={{
            paddingTop: "2em",
            paddingBottom: "1em",
            marginLeft: "0.2em",
          }}
        >
          <LeftCircleOutlined
            onClick={() => {
              setPositionSelected("");
              setDelay(true);
              setQrReadData("");
              setMenuAtomData({
                menu: "",
                id: "",
                hc: "",
                date: "",
                extra: [{}],
              });
            }}
            style={{ fontSize: "5em", color: "grey" }}
          />
          <CameraFilled
            onClick={() => {
              setChangeCamera(!changeCamera);
            }}
            style={{ fontSize: "5em", color: "grey", marginLeft: "0.2em" }}
          />
          <ReloadOutlined
            onClick={() => {
              setDelay(true);
              setQrReadData("");
              setMenuAtomData({
                menu: "",
                id: "",
                hc: "",
                date: "",
                extra: [{}],
              });
            }}
            style={{ fontSize: "5em", color: "grey", marginLeft: "0.2em" }}
          />
        </Col>
        <Col span={24}>
          <QrContainer />
        </Col>
        <Col span={24} style={{ paddingTop: delay ? "13em" : "1em" }}>
          <Title level={1} style={{ color: "grey" }}>
            Position: {positionSelected}
          </Title>
          {qrReadData !== "" ? (
            <Title level={1} style={{ color: "grey" }}>
              ID: {qrReadData}
            </Title>
          ) : null}
          <Title level={1}>{menuAtomData && menuAtomData?.menu}</Title>
        </Col>
      </Row>
      {positionSelected === "Dietista" ? (
        <div style={{ justifyContent: "center" }}>
          <FooterInfo data={menuAtomData?.extra} />
        </div>
      ) : null}
    </>
  );
};

export default MenuScreen;
