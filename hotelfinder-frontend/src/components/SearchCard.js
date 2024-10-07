import React from 'react';

const SearchCard = ({ hotel }) => {
  return (
    <li className="text-lg">
      <div className="font-bold">{hotel.name}</div>
      <div>Distance: km</div>
    </li>
  );
};

export default SearchCard;