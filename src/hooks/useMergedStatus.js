import { useEffect, useState, useRef } from "react";
import { simplifiedNodesWithName } from "../data/nodePositions";
import { normalize, normalizeTimestamp, formatPercent } from "../utils";
import { playSound } from "../utils/playSound";
import { useToastStore } from "../store/toastStore";
const api = import.meta.env.VITE_API_URL;

export const useMergedStatus = () => {
  const [modules, setModules] = useState([]);
  const prevStatuses = useRef({});

  const checkForStatusChanges = (modules) => {
    modules.forEach((mod) => {
      const prev = prevStatuses.current[mod.id];
      if (prev !== undefined && prev !== mod.data.status) {
        if (mod.status === 200) {
          useToastStore
            .getState()
            .addToast(`${mod.data.label} aktif oldu`, "success");
          playSound("success");
        } else {
          useToastStore
            .getState()
            .addToast(`${mod.data.label} devre dışı`, "error");
          playSound("error");
        }
      }
      prevStatuses.current[mod.id] = mod.status;
    });
  };
  const fetchLiveData = async () => {
    try {
      const res = await fetch(`${api}/status`);
      const liveData = await res.json();
      return liveData;
    } catch (error) {
      console.error("Data çekerken hata oluştu", error);
      return [];
    }
  };

  const mergeData = async () => {
    const live = await fetchLiveData();

    const finalNodes = live.map((mod) => {
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
          cpu_percent: formatPercent(mod.cpu_percent),
          memory_percent: formatPercent(mod.memory_percent),
          disk_percent: formatPercent(mod.disk_percent),
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

    checkForStatusChanges(finalNodes);
    setModules(finalNodes);
  };

  useEffect(() => {
    mergeData();
    const interval = setInterval(mergeData, 10000);
    return () => clearInterval(interval);
  }, []);

  return modules;
};
