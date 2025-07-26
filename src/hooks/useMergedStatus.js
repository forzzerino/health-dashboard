import { useEffect, useState } from "react";
import staticModules from "../data/mockStatus.json";
import { simplifiedNodesWithName } from "../data/nodePositions";
import { normalize, normalizeTimestamp } from "../utils";

const api = import.meta.env.VITE_API_URL;
export const useMergedStatus = () => {
  const [modules, setModules] = useState([]);

  const fetchLiveData = async () => {
    try {
      const res = await fetch(`${api}/status`);
      const liveData = await res.json();
      return liveData;
    } catch (error) {
      console.error("Data çekerken hata oluştu", error);
    }
  };

  const mergeData = async () => {
    const live = await fetchLiveData();

    const merged = [...staticModules];

    live.forEach((mod) => {
      const existingIndex = merged.findIndex(
        (m) => m.service.toLowerCase() === mod.service.toLowerCase()
      );

      if (existingIndex !== -1) {
        merged[existingIndex] = { ...merged[existingIndex], ...mod };
      } else {
        merged.push(mod);
      }
    });

    const finalNodes = merged.map((mod) => {
      const label = mod.service;
      const id = normalize(label);
      const position = simplifiedNodesWithName.find(
        (n) => normalize(n.name) === id
      ) || { x: 0, y: 0 };

      return {
        id,
        position,
        data: {
          label,
          status: mod.status,
          cpu_percent: mod.cpu_percent,
          memory_percent: mod.memory_percent,
          disk_percent: mod.disk_percent,
          jar_status: mod.jar_status,
          uptime: mod.uptime,
          timestamp: normalizeTimestamp(mod.timestamp),
        },
        type: "custom",
        selectable: false,
        connectable: false,
        draggable: false,
      };
    });

    setModules(finalNodes);
  };

  useEffect(() => {
    mergeData();
    const interval = setInterval(mergeData, 5000);
    return () => clearInterval(interval);
  }, []);

  return modules;
};
