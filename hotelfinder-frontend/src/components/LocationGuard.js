import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkLocationPermission } from '../utils/handleLocationPermission';
import LoadingPage from '../pages/LoadingPage';

const LocationGuard = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      checkLocationPermission()
        .then(() => {
          setLoading(false);
          navigate('/home'); 
        })
        .catch(() => {
          setLoading(false);
          navigate('/denied-location');
        });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  if (loading) {
    return <LoadingPage />;
  }

  return children;
};

export default LocationGuard;
