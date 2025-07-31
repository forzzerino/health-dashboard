import { useEffect, useState } from "react";
import type { Node } from "@xyflow/react";
import mockData from "../data/mockStatus.json";
import { simplifiedNodesWithName } from "../data/nodePositions";

export type CustomNodeData = {
  status: number;
};

export type CustomNode = Node<CustomNodeData>;

export const useMockStatus = (): CustomNode[] => {
  const [modules, setModules] = useState<CustomNode[]>([]);

  useEffect(() => {
    const loadMockData = () => {
      const mergedNodes: CustomNode[] = mockData.map((mod) => {
        const id = mod.service.toLowerCase().replace(/\s/g, "-");
        const position = simplifiedNodesWithName.find(
          (n) => n.name.toLowerCase().replace(/\s/g, "-") === id
        ) || { x: 0, y: 0 };

        return {
          id,
          position,
          data: { ...mod },
          type: "custom",
          selectable: false,
          connectable: false,
          draggable: false,
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
