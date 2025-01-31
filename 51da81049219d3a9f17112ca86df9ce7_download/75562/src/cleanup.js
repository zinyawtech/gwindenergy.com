// Clear specific data
const clearSpecificData = (key) => {
  localStorage.removeItem(key);
};

// Clear all data
const clearAllData = () => {
  localStorage.clear();
};
