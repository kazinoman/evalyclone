import React, { useState } from "react";
import "./App.css";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { theme } from "@/config/theme";
import { muiTheme } from "@/config/muitheme";
import Layout from "./layout";
import { CssBaseline } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);
  // Create a client
  const queryClient = new QueryClient();

  return (
    <ConfigProvider theme={theme}>
      <ThemeProvider theme={muiTheme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <Layout />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </ConfigProvider>
  );
}
export default App;
