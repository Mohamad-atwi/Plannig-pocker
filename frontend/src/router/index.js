import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LinearProgress } from "@mui/material";

import SignupForm from "../features/auth/signup";
import Home from "../features/home/home";
import SessioPage from "../pages/SessionPage";
import LoginForm from "../features/auth/login";
import PrivateRoute from "./PrivateRoutes";
import JoinsSession from "../features/session/JoinSession";
import CreateSession from "../features/session/CreateSession";
import LayoutSideBar from "../layout/layout-sidebar";
import TermsAndConditions from "../pages/TermsAndConditions";
import History from "../features/history/history";
const index = () => {
  return (
    <Router forceRefresh={true}>
      <Suspense fallback={<LinearProgress />}>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route path="/" element={<LayoutSideBar />}>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />}/>
              <Route path="/session/:sessionId" element={<SessioPage />} />
            </Route>

            <Route path="/JoinSession" element={<JoinsSession />} />
            <Route path="/CreateSession" element={<CreateSession />} />
          </Route>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/Terms" element={<TermsAndConditions />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default index;
