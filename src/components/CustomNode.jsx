import { Handle, Position } from "@xyflow/react";

export default function CustomNode({ data }) {
  return (
    <div className="bg-gray-800 text-white p-3 rounded shadow text-sm">
      <strong>{data.label}</strong>
      <div className="text-xs">{data.job}</div>

      {/* Tüm olası handle'ları sabit yerleştir */}
      <Handle id="tl" type="target" position={Position.Left} />
      <Handle id="tr" type="target" position={Position.Right} />
      <Handle id="tt" type="target" position={Position.Top} />
      <Handle id="tb" type="target" position={Position.Bottom} />

      <Handle id="sl" type="source" position={Position.Left} />
      <Handle id="sr" type="source" position={Position.Right} />
      <Handle id="st" type="source" position={Position.Top} />
      <Handle id="sb" type="source" position={Position.Bottom} />
    </div>
  );
}
