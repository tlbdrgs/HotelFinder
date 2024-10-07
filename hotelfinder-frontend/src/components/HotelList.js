import React from 'react';
import SearchCard from './SearchCard';

const HotelList = ({ hotels }) => {
  return (
    <div className="mt-8">
      {hotels.length > 0 ? (
        <ul className="space-y-4">
          {hotels.map((hotel) => (
            <SearchCard key={hotel.id} hotel={hotel} />
          ))}
        </ul>
      ) : (
        <p className="text-xl">No hotels found within this radius.</p>
      )}
    </div>
  );
};

export default HotelList;