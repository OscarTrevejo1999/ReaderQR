import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import "./App.css";
import HeaderSuperior from "./Components/headerSuperior";
import MenuInfo from "./Components/menuInfo";
import MenuScreen from "./Components/menuScreen";

const { Header, Content } = Layout;

function App() {
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
            <div style={{ marginTop: "2em" }}>
              {/* <PlatosInfo /> */}
              <MenuInfo />
              <MenuScreen />
            </div>
          </>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
