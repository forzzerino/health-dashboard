import { useEffect, useState } from "react";
import mockData from "../data/mockStatus.json";

export const useMockStatus = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    // Simüle etmek için bir süre sonra veri
    const loadMockData = () => {
      setModules(mockData);
    };

    loadMockData();

    // İsteğe bağlı: Veriyi belirli aralıklarla yenilemek
    const interval = setInterval(loadMockData, 5000);

    return () => clearInterval(interval);
  }, []);

  return modules;
};
