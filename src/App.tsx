import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ConfigProvider } from "antd";
import { theme } from "@/config/theme";
import Layout from "./layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ConfigProvider theme={theme}>
      <Layout />
    </ConfigProvider>
  );
}
export default App;
