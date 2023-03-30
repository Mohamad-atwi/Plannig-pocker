import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LinearProgress } from "@mui/material";

import SignupForm from "../features/auth/SignUp";

const index = () => {
  return (
    <Router forceRefresh={true}>
      <Suspense fallback={<LinearProgress />}>
        <Routes>
          {/* Public URL */}
          <Route index path="/signup" element={<SignupForm />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default index;
