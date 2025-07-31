// Diagram.tsx
import { useEffect } from "react";
import CustomNode from "./CustomNode";
import { useMockStatus } from "@/hooks/useMockStatus";
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import type { Node, Edge } from "@xyflow/react";
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
    id: "tgf-chf",
    source: "tgf",
    target: "chf",
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

type CustomNodeData = {
  status: number;
};

type CustomNode = Node<CustomNodeData>;

function DiagramContent() {
  const modules: CustomNode[] = useMockStatus();

  const [nodes, setNodes, onNodesChange] = useNodesState<CustomNode>([]);

  useEffect(() => {
    setNodes(modules);
  }, [modules]);

  function useDynamicEdges(
    nodes: CustomNode[],
    initialEdges: Edge[]
  ): [Edge[], typeof setEdges, typeof onEdgesChange] {
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

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

  const [edges, , onEdgesChange] = useDynamicEdges(nodes, initialEdges);

  return (
    <div className="h-full w-full bg-black text-white">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background />
      </ReactFlow>
    </div>
  );
}

// SADECE TEK export default olabilir!
export default function Diagram() {
  return (
    <ReactFlowProvider>
      <DiagramContent />
    </ReactFlowProvider>
  );
}
