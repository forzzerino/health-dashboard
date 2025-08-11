import { Activity, Cpu, HardDrive, Wifi } from "lucide-react";
import BentoAlert from "../assets/bento-system.png";

export function SystemMetricsCard() {
  const performance = 68;

  return (
    <div
      className="h-full rounded-2xl p-6 border border-gray-800/50 shadow-2xl relative overflow-hidden group transition-all duration-500 hover:scale-[1.02]
       shadow-black/50 hover:border-cyan-500/30
      hover:shadow-cyan-500/5 hover:shadow-2xl"
    >
      <div className="absolute  h-full w-full bg-gradient-to-t from-gray-950 to-transparent scale-120 z-1"></div>{" "}
      <div className="h-full flex flex-col justify-end">
        {" "}
        <div className="absolute z-0 top-0 right-0 w-full p-4">
          {/* Performance Gauge */}
          <div className="relative flex justify-center items-start pt-4 mb-8">
            <div className="relative ">
              <svg width="140" height="90" className="">
                {/* Background arc */}
                <path
                  d="M 15 60 A 45 45 0 0 1 125 60"
                  stroke="#374151"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Progress arc */}
                <path
                  d="M 15 60 A 45 45 0 0 1 125 60"
                  stroke="url(#gaugeGradient)"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${performance * 1.6}`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient
                    id="gaugeGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Performance value */}
              <div className="absolute top-16 inset-0 flex items-center justify-center mb-24">
                <div className="text-center mt-4">
                  <div className="text-2xl text-white">{performance}%</div>
                  <div className="text-xs text-gray-400">Performance</div>
                </div>
              </div>

              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-radial from-orange-200/50 to-transparent rounded-full blur-sm"></div>
            </div>
          </div>

          <div className="space-y-4">
            {/* CPU Metric */}
            <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">CPU Usage</span>
                </div>
                <span className="text-sm text-white">68%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full w-[68%] animate-pulse"></div>
              </div>
            </div>

            {/* Memory Metric */}
            <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Memory</span>
                </div>
                <span className="text-sm text-white">45%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full w-[45%] animate-pulse"></div>
              </div>
            </div>

            {/* Storage Metric */}
            <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <HardDrive className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-300">Storage</span>
                </div>
                <span className="text-sm text-white">82%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-400 h-2 rounded-full w-[82%] animate-pulse"></div>
              </div>
            </div>

            {/* Network Metric */}
            <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Wifi className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">Network</span>
                </div>
                <span className="text-sm text-white">23%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-400 h-2 rounded-full w-[23%] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 z-10">
          <h3 className="text-white text-lg mb-4">System Load & Metrics</h3>
          <p className="text-[#B0B0B5] text-sm leading-relaxed">
            Displays CPU, RAM, and Disk usage per module, allowing proactive
            detection of bottlenecks in real time.
          </p>
        </div>
      </div>{" "}
      <img
        src={BentoAlert}
        alt=""
        className="absolute bg-fixed top-90 -left-14 content-center object-cover scale-75 -z-1 opacity-40"
      />
    </div>
  );
}
