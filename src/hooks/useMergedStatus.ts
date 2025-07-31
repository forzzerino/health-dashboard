import { useEffect, useState, useRef } from "react";
import { simplifiedNodesWithName } from "../data/nodePositions";
import { normalize, normalizeTimestamp, formatPercent } from "../utils";
import { playSound } from "../utils/playSound";
const api = import.meta.env.VITE_API_URL;
type ModuleData = {
  label: string;
  status: number;
  cpu_percent: string;
  memory_percent: string;
  disk_percent: string;
  jar_status: string;
  uptime: string;
  timestamp: string;
};
type ModuleNode = Node<ModuleData>;
export const useMergedStatus = () => {
  const [modules, setModules] = useState<ModuleNode[]>([]);
  const prevStatuses = useRef<Record<string, number>>({});

  const checkForStatusChanges = (modules: ModuleNode[]) => {
    modules.forEach((mod) => {
      const prev = prevStatuses.current[mod.id];
      if (prev !== undefined && prev !== mod.data.status) {
        if (mod.data.status === 200) {
          playSound("success");
        } else {
          playSound("error");
        }
      }
      prevStatuses.current[mod.id] = mod.data.status;
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

    const finalNodes: ModuleNode[] = live.map((mod: any) => {
      const label = mod.service;
      const id = normalize(label);
      const position = simplifiedNodesWithName.find(
        (n: any) => normalize(n.name) === id
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
