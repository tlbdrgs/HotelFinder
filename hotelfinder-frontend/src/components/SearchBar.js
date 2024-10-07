import React, { useState } from 'react';
import { TextField } from '@fluentui/react';

const SearchBar = ({ onSearch }) => {
  const [radius, setRadius] = useState('');

  const handleRadiusChange = (event) => {
    const inputValue = event.target.value;

    const radiusValue = Math.max(0, Number(inputValue));

    setRadius(radiusValue);
    if (onSearch) {
      onSearch(radiusValue);
    }
  };

  return (
    <div className="mt-8 flex w-full max-w-sm items-center space-x-2">
      <TextField
        label="Search Radius"
        type="number"
        placeholder="Enter search radius (in km)"
        value={radius}
        onChange={handleRadiusChange}
        styles={{ fieldGroup: { width: 300 } }}
      />
    </div>
  );
};

export default SearchBar;
