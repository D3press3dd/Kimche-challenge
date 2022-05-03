import { useState } from 'react';

const initialValue = {
  isContinent: false,
  isLanguage: false,
};

const useActive = () => {
  const [isActive, setIsActive] = useState(initialValue);
  const handleIsActive = (e) => {
    const value = e.target.textContent;
    const whichOneIsActive = {
      Continent: { isContinent: true, isLanguage: false },
      Language: { isContinent: false, isLanguage: true },
    };

    setIsActive(whichOneIsActive[value] || isActive);
  };
  return { handleIsActive, isActive };
};

export default useActive;
