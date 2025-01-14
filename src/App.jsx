import ForgotPassword from "./components/auth/ForgotPassword";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ResetPassword from "./components/auth/ResetPassword";
import LoginOTP from "./components/auth/LoginOTP";
import FeaturesPage from "./components/features/FeaturesPage";
import RequestDemoPage from "./components/features/RequestDemoPage";
import SolutionsPage from "./components/features/SolutionsPage";
import EnterprisePage from "./components/features/EnterprisePage";
import LearnMorePage from "./components/features/LearnMorePage";
import Pricing from "./components/features/PricingPage";

import LandingPage from "./components/home/LandingPage";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/request-demo" element={<RequestDemoPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/enterprise" element={<EnterprisePage />} />
            <Route path="/learn-more" element={<LearnMorePage />} />
            <Route path="/pricing" element={<Pricing />} />

          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/login-otp" element={<LoginOTP />} />
        </Routes>
      </Router>
      {/* <LandingPage/>
     <Login/> */}
    </>
  );
}

export default App;
