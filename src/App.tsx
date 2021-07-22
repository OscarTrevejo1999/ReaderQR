import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { useRecoilValue } from "recoil";
import "./App.css";
import CenterSelector from "./Components/centerSelector";
import data from "./Components/data.json";
import HeaderSuperior from "./Components/headerSuperior";
import MenuScreen from "./Components/menuScreen";
import PositionSelector from "./Components/positionSelector";
import { centerSelected, positionSelected } from "./recoil/atoms";

const { Header, Content } = Layout;

function App() {
  const positionSelectedData = useRecoilValue(positionSelected);
  const centerSelectedData = useRecoilValue(centerSelected);

  // useEffect(() => {
  //   // Actualiza el título del documento usando la API del navegador
  // }, [state]);

  return (
    <div className="App">
      <Layout className="layout">
        <Header
          style={{
            display: "grid",
            backgroundColor: "#ee3a43",
          }}
        >
          <HeaderSuperior />
        </Header>
        <Content style={{ backgroundColor: "#f5f5f5" }}>
          <>
            {centerSelectedData === "" ? (
              <CenterSelector data={data} />
            ) : positionSelectedData === "" ? (
              <PositionSelector data={data} />
            ) : (
              <div>
                <MenuScreen />
              </div>
            )}
          </>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
