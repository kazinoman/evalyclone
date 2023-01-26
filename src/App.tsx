import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "antd";
import BaseRoutes from "./routes";
import Layout from "./layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}
export default App;
