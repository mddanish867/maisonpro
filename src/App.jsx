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
import VerifyAccount from "./components/auth/VerifyAccount";
import AccountSettings from "./components/auth/AccountSettings";
import UserProfile from "./components/auth/UserProfile";
import Aquisition from "./components/Organizations/Aquisition";
import CreateProject from "./components/Projects/CreateProject";
import CreateOrg from "./components/Organizations/CreateOrg";
import InviteMembers from "./components/members/InviteMembers";
import ProjectDashboard from "./components/dashboard/ProjectDashboard";
import OrgDashboard from "./components/dashboard/OrgDashboard";
import UnitTestSummary from "./components/unit-test/UnitTestSummary";
import UnitTestGenerator from "./components/unit-test/UnitTestGenerator";

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
          <Route path="/aquisition" element={<Aquisition />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/create-org" element={<CreateOrg />} />
          <Route path="/invite-members" element={<InviteMembers />} />
          <Route path="/project-dashboard" element={<ProjectDashboard />} />
          <Route path="/org-dashboard" element={<OrgDashboard />} />
          <Route path="/test-summary" element={<UnitTestSummary />} />
          <Route path="/generate-test" element={<UnitTestGenerator />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-account" element={<VerifyAccount />} />
          <Route path="/account-setting" element={<AccountSettings />} />
          <Route path="/user-profile" element={<UserProfile />} />

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
