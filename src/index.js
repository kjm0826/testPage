import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <Suspense>
      <App />
  </Suspense>,
document.getElementById("root")
);

//serviceWorker.register(); // serviceWorker 등록
