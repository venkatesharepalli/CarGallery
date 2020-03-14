import React, {useEffect, useState} from 'react';
import {getGalleryData} from './service';

export const StoreContext = React.createContext(null)

export default ({ children }) => {
  const [galleryData, setGalleryData] = useState({});
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);

  const fetchGalleryData = async () => {
    try {
      const reportsData = await getGalleryData();      
      setGalleryData(reportsData);      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const store = {
    galleryData,
    setGalleryData,
    selectedGalleryIndex,
    setSelectedGalleryIndex
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}