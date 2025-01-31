// Store map data
const saveMapData = (mapData) => {
  localStorage.setItem('mapData', JSON.stringify(mapData));
};

// Retrieve map data
const getMapData = () => {
  const saved = localStorage.getItem('mapData');
  return saved ? JSON.parse(saved) : null;
};
