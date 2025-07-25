import { Handle, Position } from "@xyflow/react";

export default function CustomNode({ data }) {
  return (
    <div className="bg-gray-800 text-white p-3 w-24 h-24 text-center rounded shadow text-sm">
      <div className="font-bold">{data.label}</div>

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
