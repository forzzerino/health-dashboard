import { useCallback } from "react";
import CustomNode from "./CustomNode";
import {
  ReactFlow,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
  Position,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const nodeTypes = {
  custom: CustomNode,
};
const nodeDefaults = {
  selectable: false,
  connectable: false,
  draggable: false,
};
const edgeDefaults = {
  style: {
    strokeWidth: 2,
    stroke: "#00BFFF",
  },
  animated: true,
  type: "step",
};

const initialNodes = [
  {
    id: "aom",
    type: "custom",
    position: { x: 120, y: 0 },
    data: { label: "AOM", job: "Account & Order Mng" },
    ...nodeDefaults,
  },
  {
    id: "hazelcast",
    type: "custom",
    position: { x: 150, y: 100 },
    data: { label: "Hazelcast", job: "" },
    ...nodeDefaults,
  },
  {
    id: "tgf",
    type: "custom",
    position: { x: 150, y: 250 },
    data: { label: "TGF", job: "Traffic Generator" },
    ...nodeDefaults,
  },
  {
    id: "chf",
    type: "custom",
    position: { x: 350, y: 250 },
    data: { label: "CHF", job: "Charging Function" },
    ...nodeDefaults,
  },
  {
    id: "abmf",
    type: "custom",
    position: { x: 550, y: 250 },
    data: { label: "ABMF", job: "Acc&Balance Function" },
    ...nodeDefaults,
  },
  {
    id: "voltdb",
    type: "custom",
    position: { x: 550, y: 100 },
    data: { label: "VOLT", job: "ACTIVE DATA" },
    ...nodeDefaults,
  },
  {
    id: "oracle",
    type: "custom",
    position: { x: 750, y: 100 },
    data: { label: "ORACLE", job: "DATABASE" },
    ...nodeDefaults,
  },
  {
    id: "kafka",
    type: "custom",
    position: { x: 550, y: 400 },
    data: { label: "KAFKA", job: "" },
    ...nodeDefaults,
  },
  {
    id: "cgf",
    type: "custom",
    position: { x: 750, y: 400 },
    data: { label: "CGF", job: "Charging GW Function" },
    ...nodeDefaults,
  },
  {
    id: "ns",
    type: "custom",
    position: { x: 550, y: 550 },
    data: { label: "Notification Service", job: "" },
    ...nodeDefaults,
  },
  {
    id: "ios",
    type: "custom",
    position: { x: -200, y: 0 },
    data: { label: "iOS App", job: "" },
    ...nodeDefaults,
  },
  {
    id: "android",
    type: "custom",
    position: { x: -200, y: 200 },
    data: { label: "Android App", job: "" },
    ...nodeDefaults,
  },
  {
    id: "web",
    type: "custom",
    position: { x: -200, y: 400 },
    data: { label: "Web App", job: "" },
    ...nodeDefaults,
  },
  {
    id: "desktop",
    type: "custom",
    position: { x: -200, y: 600 },
    data: { label: "Desktop App", job: "" },
    ...nodeDefaults,
  },
  {
    id: "sms",
    type: "custom",
    position: { x: -200, y: 800 },
    data: { label: "SMS App", job: "" },
    ...nodeDefaults,
  },
  {
    id: "prs",
    type: "custom",
    position: { x: 100, y: -200 },
    data: { label: "PRS", job: "Password Reset Service" },
    ...nodeDefaults,
  },
];

const initialEdges = [
  {
    id: "ios-aom",
    source: "ios",
    target: "aom",
    ...edgeDefaults,
    sourceHandle: "sr",
    targetHandle: "tl",
  },
  {
    id: "android-aom",
    source: "android",
    target: "aom",
    ...edgeDefaults,
    sourceHandle: "sr",
    targetHandle: "tl",
  },
  {
    id: "web-aom",
    source: "web",
    target: "aom",
    ...edgeDefaults,
    sourceHandle: "sr",
    targetHandle: "tl",
  },
  {
    id: "desktop-aom",
    source: "desktop",
    target: "aom",
    ...edgeDefaults,
    sourceHandle: "sr",
    targetHandle: "tl",
  },
  {
    id: "sms-aom",
    source: "sms",
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
    id: "chf-kafka",
    source: "chf",
    target: "kafka",
    ...edgeDefaults,
    sourceHandle: "sb",
    targetHandle: "tl",
  },
  {
    id: "kafka-ns",
    source: "kafka",
    target: "ns",
    ...edgeDefaults,
    sourceHandle: "sb",
    targetHandle: "tt",
  },
  {
    id: "kafka-cgf",
    source: "kafka",
    target: "cgf",
    ...edgeDefaults,
    sourceHandle: "sr",
    targetHandle: "tl",
  },
  {
    id: "chf-volt",
    source: "chf",
    target: "voltdb",
    ...edgeDefaults,
    sourceHandle: "st",
    targetHandle: "tl",
  },
  {
    id: "abmf-oracle",
    source: "abmf",
    target: "oracle",
    ...edgeDefaults,
    sourceHandle: "st",
    targetHandle: "tl",
  },
  {
    id: "cgf-oracle",
    source: "cgf",
    target: "oracle",
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
    id: "aom-oracle",
    target: "aom",
    source: "oracle",
    ...edgeDefaults,
    sourceHandle: "st",
    targetHandle: "tt",
  },
  {
    id: "kafka-abmf",
    target: "abmf",
    source: "kafka",
    ...edgeDefaults,
    sourceHandle: "st",
    targetHandle: "tb",
  },
  {
    id: "aom-prs",
    target: "prs",
    source: "aom",
    ...edgeDefaults,
    sourceHandle: "st",
    targetHandle: "tb",
  },
];

export default function Diagram() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-screen bg-gray-900 text-white">
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        colorMode="dark"
        fitViewOptions={{ padding: 1, includeHiddenNodes: false }}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
