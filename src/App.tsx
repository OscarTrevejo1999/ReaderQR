import { Layout } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import "./App.css";
import CenterSelector from "./Components/centerSelector";
import data from "./Components/data.json";
import HeaderSuperior from "./Components/headerSuperior";
import MenuScreen from "./Components/menuScreen";
import PositionSelector from "./Components/positionSelector";

const { Header, Content } = Layout;

function App() {
  const [centerSelected, setCenterSelected] = useState("");
  const [positionSelected, setPositionSelected] = useState("");

  // useEffect(() => {
  //   // Actualiza el título del documento usando la API del navegador
  // }, [state]);
  return (
    <div className="App">
      <Layout className="layout">
        <Header
          style={{ display: "grid", backgroundColor: "#ee3a43", height: "10%" }}
        >
          <HeaderSuperior />
        </Header>
        <Content style={{ padding: "0 50px", height: "90%" }}>
          <div>
            {centerSelected === "" ? (
              <CenterSelector
                data={data}
                setCenterSelected={setCenterSelected}
                centerSelected={centerSelected}
              />
            ) : positionSelected === "" ? (
              <PositionSelector
                data={data}
                centerSelected={centerSelected}
                setCenterSelected={setCenterSelected}
                setPositionSelected={setPositionSelected}
                positionSelected={positionSelected}
              />
            ) : (
              <div>
                <MenuScreen
                  positionSelected={positionSelected}
                  setPositionSelected={setPositionSelected}
                />
                <div style={{ padding: "2em" }} />
              </div>
            )}
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
