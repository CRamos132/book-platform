import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./style/global.css";
import theme from "./style/theme";

window.renderBooks = (containerId: string) => {
  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById(containerId)
  );
};

window.unmountBooks = (ref: any) => {
  ReactDOM.unmountComponentAtNode(ref);
};

if (!document.getElementById("Cats-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
