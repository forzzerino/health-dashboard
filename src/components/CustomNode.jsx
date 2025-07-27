import { Handle, Position } from "@xyflow/react";

export default function CustomNode({ data }) {
  const statusColor =
    data.status === 200
      ? "bg-green-500 "
      : data.status === 503
      ? "bg-red-500 drop-shadow-red-500/50"
      : "bg-pink-200";

  const borderColor =
    data.status === 200
      ? "border-green-500"
      : data.status === 503
      ? "border-red-500"
      : "border-pink-200";

  const filterColor =
    data.status === 200
      ? "drop-shadow-lg drop-shadow-green-500/50"
      : data.status === 503
      ? "drop-shadow-lg drop-shadow-red-500/50"
      : "";
  return (
    <a>
      <div
        className={`${borderColor} ${filterColor} border-2 bg-gray-950 p-4 rounded shadow text-sm min-w-64 `}
      >
        <div className="flex gap-8 justify-between">
          {" "}
          <div className="">
            {" "}
            <div className="font-bold text-lg">{data.label}</div>{" "}
            <div className="text-xs text-gray-400">{data.timestamp}</div>
          </div>
          <div
            className={`flex h-6 items-center px-2 py-2 rounded-full text-xs  border-2 ${borderColor} mt-2`}
          >
            Status:{" "}
            <span
              className={`inline-block ml-1 w-3 h-3 rounded-full ${statusColor}`}
            ></span>
          </div>
        </div>

        <div className={`border border-gray-500  p-2 rounded-xl mt-2`}>
          {" "}
          <div className="text-xs">CPU: %{data.cpu_percent}</div>
          <div className="text-xs">Memory: %{data.memory_percent}</div>
          <div className="text-xs">Disk: %{data.disk_percent}</div>
          <div className="text-xs">Jar: {data.jar_status}</div>
          <div className="text-xs">Uptime: {data.uptime}</div>
        </div>
        <div className="">
          <Handle id="tl" type="target" position={Position.Left} />
          <Handle id="tr" type="target" position={Position.Right} />
          <Handle id="tt" type="target" position={Position.Top} />
          <Handle id="tb" type="target" position={Position.Bottom} />
          <Handle id="sl" type="source" position={Position.Left} />
          <Handle id="sr" type="source" position={Position.Right} />
          <Handle id="st" type="source" position={Position.Top} />
          <Handle id="sb" type="source" position={Position.Bottom} />
        </div>
      </div>
    </a>
  );
}
