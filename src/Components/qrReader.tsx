import { Col } from "antd";
// import axios from "axios";
import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { useSetRecoilState } from "recoil";
import { menuAtom } from "../recoil/atoms";

interface QrReaderProps {
  changeCamera: any;
  setDelay: any;
  delay: boolean;
}

export const QrReaderCustom = ({
  changeCamera,
  setDelay,
  delay,
}: QrReaderProps) => {
  const setMenuAtomData = useSetRecoilState(menuAtom);

  class QrContainer extends Component {
    constructor(props: any) {
      super(props);
      this.handleScan = this.handleScan.bind(this);
    }

    getMenu = async (id: any) => {
      setMenuAtomData(QrPrueba);
      // const res = await axios
      //   .get(`https://60f821159cdca0001745522a.mockapi.io`)
      //   .then((data) => data)
      //   .catch((error) => error);
      // if (res.status === 200) {
      //   setMenuAtomData(res.data);
      // } else {
      // setMenuAtomData(QrPrueba);
      // }
    };

    handleScan = (data: any) => {
      if (data !== null) {
        this.getMenu(JSON.parse(data).id);
        setDelay(false);
      }
    };
    handleError = (err: any) => {
      console.error(err);
    };
    render() {
      const previewStyle = {
        height: 400,
        width: 400,
        display: "flex",
        justifyContent: "center",
      };

      const camStyle = {
        display: "flex",
        justifyContent: "center",
      };

      return (
        delay && (
          <div style={camStyle}>
            <QrReader
              delay={delay ? 1500 : false}
              onError={this.handleError}
              onScan={this.handleScan}
              style={previewStyle}
              facingMode={changeCamera ? "user" : "environment"}
            />
          </div>
        )
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

  return (
    <>
      <Col span={24}>
        <QrContainer />
      </Col>
    </>
  );
};

export default QrReaderCustom;
