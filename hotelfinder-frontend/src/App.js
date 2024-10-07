import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import DeniedLocationPermission from './pages/DeniedLocationPermission';
import LocationGuard from './components/LocationGuard';
import { startPermissionMonitor } from './utils/PermissionMonitor';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const stopMonitor = startPermissionMonitor(navigate);

    return () => stopMonitor();
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<LocationGuard><Home /></LocationGuard>} />
      <Route path="/home" element={<Home />} />
      <Route path="/denied-location" element={<DeniedLocationPermission />} />
    </Routes>
  );
}

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;
