import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import OtherUserProfile from "./pages/OtherUserProfile";
import Chat from "./pages/Chat";
import Request from "./pages/Request";
import FindPeoples from "./pages/FindPeoples";
import SkillMarket from "./pages/SkillMarketPlace";
import FreshGraduates from "./pages/FreshGraduates";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import UserList from "./pages/UserList";
import MentorRitikSir from "./components/MentorRitikSir";

// Mock authentication check
const isAuthenticated = () => {
  return !!localStorage.getItem("token"); // Check if a token exists in localStorage
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user-profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/other-user-profile"
          element={
            <ProtectedRoute>
              <OtherUserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/request"
          element={
            <ProtectedRoute>
              <Request />
            </ProtectedRoute>
          }
        />
        <Route
          path="/find-people"
          element={
            <ProtectedRoute>
              <FindPeoples />
            </ProtectedRoute>
          }
        />
        <Route
          path="/skill-marketplace"
          element={
            <ProtectedRoute>
              <SkillMarket />
            </ProtectedRoute>
          }
        />
        <Route
          path="/fresh-graduates"
          element={
            <ProtectedRoute>
              <FreshGraduates />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-list"
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          }
        />
        <Route path="/our-mentor" element={<MentorRitikSir />} />
      </Routes>
    </>
  );
}

export default App;
