import React, { useState, useEffect } from 'react';
import { getGeolocation } from '../utils/geolocationRetrieval';
import { motion } from 'framer-motion';
import { textColorAnimation } from '../constants/textGradient';
import SearchBar from '../components/SearchBar';
import HotelList from '../components/HotelList';
import useHotelData from '../hooks/useHotelData';

const Home = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const { hotels, error, handleSearch } = useHotelData(location);

  useEffect(() => {
    getGeolocation()
      .then((coords) => {
        setLocation(coords);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.h1
        className="text-6xl font-bold mb-8"
        variants={textColorAnimation}
        initial="hidden"
        animate="animate"
      >
        HotelSeek
      </motion.h1>

      {location.latitude && location.longitude ? (
        <p className="text-xl">
          Your Location: Latitude {location.latitude}, Longitude {location.longitude}
        </p>
      ) : (
        <p className="text-xl">Fetching your location...</p>
      )}

      <SearchBar onSearch={handleSearch} />

      <HotelList hotels={hotels} />
    </div>
  );
};

export default Home;
