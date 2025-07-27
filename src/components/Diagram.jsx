import { useEffect } from "react";
import CustomNode from "./CustomNode";
import { useMergedStatus } from "../hooks/useMergedStatus";

import {
  MarkerType,
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodeTypes = {
  custom: CustomNode,
};
const edgeDefaults = {
  animated: true,
  type: "step",
  style: {
    strokeWidth: 4,
    stroke: "#00BF72",
  },
};

const initialEdges = [
  {
    id: "web-app-aom",
    source: "web-app",
    target: "aom",
    ...edgeDefaults,
    sourceHandle: "sr",
    targetHandle: "tl",
  },
  {
    id: "aom-hazelcast",
    source: "aom",
    target: "hazelcast",
    ...edgeDefaults,
    sourceHandle: "sb",
    targetHandle: "tt",
  },
  {
    id: "hazelcast-tgf",
    source: "hazelcast",
    target: "tgf",
    ...edgeDefaults,
    sourceHandle: "sb",
    targetHandle: "tt",
  },
  {
    id: "hazelcast-traffic-generator",
    source: "hazelcast",
    target: "traffic-generator",
    ...edgeDefaults,
    sourceHandle: "sb",
    targetHandle: "tt",
  },
  {
    id: "tgf-chf",
    source: "tgf",
    target: "chf",
    ...edgeDefaults,
    sourceHandle: "sr",
    targetHandle: "tl",
  },
  {
    id: "tgf-charging-function",
    source: "tgf",
    target: "charging-function",
    ...edgeDefaults,
    sourceHandle: "sr",
    targetHandle: "tl",
  },
  {
    id: "traffic-generator-chf",
    source: "traffic-generator",
    target: "chf",
    ...edgeDefaults,
    sourceHandle: "sr",
    targetHandle: "tl",
  },
  {
    id: "traffic-generator-charging-function",
    source: "traffic-generator",
    target: "charging-function",
    ...edgeDefaults,
    sourceHandle: "sr",
    targetHandle: "tl",
  },
  {
    id: "chf-kafkaapp",
    source: "chf",
    target: "kafkaapp",
    ...edgeDefaults,
    sourceHandle: "sb",
    targetHandle: "tl",
  },
  {
    id: "charging-function-kafkaapp",
    source: "charging-function",
    target: "kafkaapp",
    ...edgeDefaults,
    sourceHandle: "sb",
    targetHandle: "tl",
  },
  {
    id: "kafkaapp-notification-service",
    source: "kafkaapp",
    target: "notification-service",
    ...edgeDefaults,
    sourceHandle: "sb",
    targetHandle: "tt",
  },
  {
    id: "kafkaapp-cgf",
    source: "kafkaapp",
    target: "cgf",
    ...edgeDefaults,
    sourceHandle: "sr",
    targetHandle: "tl",
  },
  {
    id: "chf-voltdb",
    source: "chf",
    target: "voltdb",
    ...edgeDefaults,
    sourceHandle: "st",
    targetHandle: "tl",
  },
  {
    id: "charging-function-voltdb",
    source: "charging-function",
    target: "voltdb",
    ...edgeDefaults,
    sourceHandle: "st",
    targetHandle: "tl",
  },
  {
    id: "abmf-oracle-database",
    source: "abmf",
    target: "oracle-database",
    ...edgeDefaults,
    sourceHandle: "sr",
    targetHandle: "tl",
  },
  {
    id: "notification-service-oracle-database",
    source: "notification-service",
    target: "oracle-database",
    ...edgeDefaults,
    sourceHandle: "sr",
    targetHandle: "tr",
  },
  {
    id: "cgf-oracle-database",
    source: "cgf",
    target: "oracle-database",
    ...edgeDefaults,
    sourceHandle: "st",
    targetHandle: "tb",
  },
  {
    id: "aom-voltdb",
    target: "aom",
    source: "voltdb",
    ...edgeDefaults,
    sourceHandle: "st",
    targetHandle: "tr",
  },
  {
    id: "aom-oracle-database",
    target: "aom",
    source: "oracle-database",
    ...edgeDefaults,
    sourceHandle: "st",
    targetHandle: "tr",
  },
  {
    id: "kafkaapp-abmf",
    target: "abmf",
    source: "kafkaapp",
    ...edgeDefaults,
    sourceHandle: "st",
    targetHandle: "tb",
  },
  {
    id: "aom-password-reset-service",
    target: "password-reset-service",
    source: "aom",
    ...edgeDefaults,
    sourceHandle: "st",
    targetHandle: "tb",
  },
];

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

  function useDynamicEdges(nodes, initialEdges) {
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
      const updatedEdges = initialEdges.map((edge) => {
        const sourceNode = nodes.find((n) => n.id === edge.source);
        const isSourceUp = sourceNode?.data?.status === 200;
        const newStrokeColor = isSourceUp ? "#00BF72" : "#FF4B4B";

        return {
          ...edge,
          style: {
            ...edge.style,
            stroke: newStrokeColor,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: newStrokeColor,
          },
        };
      });

      setEdges(updatedEdges);
    }, [nodes]);

    return [edges, setEdges, onEdgesChange];
  }
  const [edges] = useDynamicEdges(nodes, initialEdges);
  return (
    <div className="h-full w-full bg-black text-white">
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Background />
      </ReactFlow>
    </div>
  );
}
