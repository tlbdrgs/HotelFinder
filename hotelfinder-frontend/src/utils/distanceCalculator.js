export const haversineDistance = (coord1, coord2) => {
    const toRadians = (degrees) => degrees * (Math.PI / 180);
  
    const lat1 = toRadians(coord1.latitude);
    const lon1 = toRadians(coord1.longitude);
    const lat2 = toRadians(coord2.latitude);
    const lon2 = toRadians(coord2.longitude);
  
    const dlat = lat2 - lat1;
    const dlon = lon2 - lon1;
  
    const a = Math.sin(dlat / 2) ** 2 +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(dlon / 2) ** 2;
  
    const c = 2 * Math.asin(Math.sqrt(a));
    const R = 6371;
    return R * c;
  };