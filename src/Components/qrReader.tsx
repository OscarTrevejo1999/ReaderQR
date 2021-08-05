// import axios from "axios";
import { message } from "antd";
import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { menu, menuSoapCall, token, user } from "../recoil/atoms";
import { SoapCallGetMenu, SoapCallLogin } from "./soapCalls";
import xmlData from "./xml_data";

var parseString = require("xml2js").parseString;

export const QrReaderCustom = () => {
  const [userData, setUserData] = useRecoilState(user);
  const setMenuData = useSetRecoilState(menu);
  const [menuDataSoap, setMenuDataSoap] = useRecoilState(menuSoapCall);
  const informationSplit = userData.split("|");
  const menuDataSplit = userData.split("|");
  const tokenData = useRecoilValue(token);
  class QrContainer extends Component {
    constructor(props: any) {
      super(props);
      this.handleScan = this.handleScan.bind(this);
    }

    errorUser = () => {
      message.error({
        content: "Debes logearte como usuario antes de poder leer un menú",
        style: {
          fontSize: "3em",
        },
      });
    };
    errorScan = () => {
      message.error({
        content: "Ha habido un problema a la hora de escanear el QR",
        style: {
          fontSize: "3em",
        },
      });
    };

    setUserInformation = (data: any) => {
      setUserData(data);
      setMenuData("");
      setMenuDataSoap("");
      SoapCallLogin(
        informationSplit[3],
        informationSplit[4],
        "http://namespace.aramark.es/"
      );
    };

    setMenuInformation = (data: any) => {
      setMenuData(data);
      SoapCallGetMenu(
        menuDataSplit[0],
        tokenData,
        "http://namespace.aramark.es/"
      );
      const parser = new DOMParser();
      const xml = parser.parseFromString(xmlData, "text/xml");
      var oSerializer = new XMLSerializer();
      const SerializeXML = oSerializer.serializeToString(
        xml.getElementsByTagName("MenuPorCama")[0]
      );

      parseString(SerializeXML, function (err: any, result: any) {
        setMenuDataSoap(result);
      });
    };

    handleScan = (data: any) => {
      if (data !== null) {
        data.split("|").length === 5
          ? this.setUserInformation(data)
          : userData === ""
          ? this.errorUser()
          : this.setMenuInformation(data);
      }
    };

    handleError = (err: any) => {
      console.error(err);
      this.errorScan();
    };

    render() {
      const previewStyleUser = {
        height: "30em",
        width: "30em",
        display: "flex",
        justifyContent: "center",
      };
      const previewStyleMenu = {
        height: "10em",
        width: "10em",
      };

      return (
        <div>
          <QrReader
            onError={this.handleError}
            onScan={this.handleScan}
            // style={previewStyleUser}
            style={
              Object.keys(menuDataSoap).length === 0
                ? previewStyleUser
                : previewStyleMenu
            }
            // facingMode={changeCamera ? "user" : "environment"}
          />
        </div>
      );
    }
  }

  return (
    <>
      <QrContainer />
    </>
  );
};

export default QrReaderCustom;
