import { LeftCircleOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import React, { Component, useEffect } from "react";
import QrReader from "react-qr-reader";
import { useRecoilState } from "recoil";
import { menuAtom } from "../recoil/atoms";
import FooterInfo from "./footerInfo";

const { Title } = Typography;

interface MenuScreenProps {
  setPositionSelected: any;
  setMenuSuperiorData: any;
  positionSelected: any;
}

export const MenuScreen = ({
  setPositionSelected,
  setMenuSuperiorData,
  positionSelected,
}: MenuScreenProps) => {
  const [menuAtomData, setMenuAtomData] = useRecoilState(menuAtom);

  class QrContainer extends Component {
    constructor(props: any) {
      super(props);

      this.handleScan = this.handleScan.bind(this);
    }

    handleScan = (data: any) => {
      console.log(data);

      if (data !== null) {
        setMenuAtomData(JSON.parse(data));
        console.log(data);
        console.log(JSON.parse(data));
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
        marginTop: "-50px",
      };

      return (
        <div style={camStyle}>
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={previewStyle}
            facingMode="user"
          />
          {/* <p style={textStyle}>{state}</p> */}
        </div>
      );
    }
  }

  const QrPrueba = [
    {
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
    },
  ];
  console.log(JSON.stringify(QrPrueba));

  useEffect(() => {}, [menuAtomData]);
  return (
    <>
      <Row gutter={16} style={{ alignItems: "center" }}>
        <Col span={3} style={{ paddingTop: "2em", paddingBottom: "2em" }}>
          <LeftCircleOutlined
            onClick={() => {
              setPositionSelected("");
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
        </Col>
        {menuAtomData?.menu !== null ? (
          <Col span={24} style={{ paddingTop: "3em" }}>
            <QrContainer />
          </Col>
        ) : null}

        <Col span={24} style={{ paddingTop: "13em" }}>
          <Title level={1} style={{ color: "grey" }}>
            Position: {positionSelected}
          </Title>
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
