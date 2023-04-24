import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LinearProgress } from "@mui/material";

import SignupForm from "../features/auth/signup";
import Home from "../features/home/home";
import SessioPage from "../pages/SessionPage";
import LoginForm from "../features/auth/login";
const index = () => {
  return (
    <Router forceRefresh={true}>
      <Suspense fallback={<LinearProgress />}>
        <Routes>
          {/* Public URL */}
          <Route index path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/session" element={<SessioPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default index;
