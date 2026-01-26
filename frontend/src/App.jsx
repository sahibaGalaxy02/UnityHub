import { Routes, Route, Navigate } from "react-router-dom"

import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import HelpRequests from "./pages/HelpRequests"
import Chat from "./pages/Chat"
import Donations from "./pages/Donations"
import Admin from "./pages/Admin"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/help" element={<HelpRequests />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/donations" element={<Donations />} />
      <Route path="/admin" element={<Admin />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
