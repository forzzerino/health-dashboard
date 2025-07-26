import { useEffect } from "react";
import CustomNode from "./CustomNode";
import { useMergedStatus } from "../hooks/useMergedStatus";

import {
  ReactFlow,
  Background,
  useNodesState,
  Position,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodeTypes = {
  custom: CustomNode,
};

// const edgeDefaults = {
//   animated: true,
//   type: "step",
//   style: {
//     strokeWidth: 2,
//     stroke: "#00BF72",
//   },
// };

export default function Diagram() {
  return (
    <ReactFlowProvider>
      <DiagramContent />
    </ReactFlowProvider>
  );
}
function DiagramContent() {
  const modules = useMergedStatus();

  const [nodes, setNodes] = useNodesState([]);
  useEffect(() => {
    setNodes(modules);
  }, [modules]);

  return (
    <div className="w-full h-screen bg-gray-900 text-white">
      <ReactFlow
        nodes={nodes}
        // edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
        colorMode="dark"
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
