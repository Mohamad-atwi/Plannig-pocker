import React, { Suspense } from "react";
import Routes from "./router";
import { LinearProgress } from "@mui/material";

function App() {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes />
    </Suspense>
  );
}

export default App;
