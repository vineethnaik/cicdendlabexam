import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

// Get base path for GitHub Pages - matches vite.config.js base
const getBasePath = () => {
  if (window.location.hostname.includes('github.io')) {
    return '/cicdendlabexam';
  }
  return '/';
};

export default function App() {
  return (
    <Router basename={getBasePath()}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
