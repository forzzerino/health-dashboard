import { useEffect, useState } from "react";
import mockData from "../data/mockStatus.json";

export const useMockStatus = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const loadMockData = () => {
      const mergedNodes = mockData.map((mod) => {
        return {
          id: mod.name.toLowerCase().replace(/\s/g, "-"),
          data: {
            service: mod.name,
            status: mod.status,
            cpu_percent: mod.cpu_percent,
            memory_percent: mod.memory_percent,
            disk_percent: mod.disk_percent,
            jar_status: mod.jar_status,
            uptime: mod.uptime,
            timestamp: mod.timestamp,
          },
          selectable: false,
          connectable: false,
          draggable: false,
          type: "custom",
        };
      });

      setModules(mergedNodes);
    };

    loadMockData();

    const interval = setInterval(loadMockData, 5000);
    return () => clearInterval(interval);
  }, []);

  return modules;
};
