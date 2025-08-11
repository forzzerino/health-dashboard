import { Database } from "lucide-react";
import bentobg from "../assets/bento-monitor.png";

export function DataPipelineCard() {
  return (
    <div
      className="h-full rounded-2xl p-6 border border-gray-800/50 shadow-2xl relative overflow-hidden group transition-all duration-500 hover:scale-[1.02]
       shadow-black/50 hover:border-cyan-500/30
      hover:shadow-cyan-500/5 hover:shadow-2xl"
    >
      <div className="absolute z-1 bg-gradient-to-t from-gray-950 to-transparent  h-full w-full scale-120"></div>{" "}
      {/* Database Stack Visual */}
      <div className="flex items-end h-full">
        {" "}
        <div className="absolute top-20 left-10 scale-400 flex justify-center items-start pt-4 mb-6">
          <div className="relative">
            <div className="relative space-y-1">
              {/* Database 2 */}
              <div className="w-24 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg shadow-lg shadow-cyan-500/30 relative">
                <div className="absolute inset-0  bg-white/20 rounded-t-full h-3"></div>
                <Database className="absolute right-2 top-1 w-4 h-4 text-white/80" />
              </div>

              {/* Database 3 */}
              <div className="w-24 h-6 bg-gradient-to-r from-cyan-900 to-cyan-900 rounded-lg shadow-lg shadow-cyan-500/20 relative">
                <div className="absolute inset-0  bg-white/10 rounded-t-full h-2.5"></div>
                <Database className="absolute right-2 top-1 w-4 h-4 text-white/80" />
              </div>

              {/* Database 4 */}
              <div className="w-24 h-6 bg-gradient-to-r from-cyan-900 to-cyan-950 rounded-lg shadow-lg shadow-cyan-500/30 relative">
                <div className="absolute inset-0  bg-white/10 rounded-t-full h-2.5"></div>
                <Database className="absolute right-2 top-1 w-4 h-4 text-white/80" />
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-white text-lg mb-3">Reliable Data Pipeline</h3>
          <p className="text-[#B0B0B5] text-sm leading-relaxed mb-4 text-shadow-lg text-shadow-black/30">
            Secure, scalable data processing pipeline with real-time monitoring
            and automated failover mechanisms.
          </p>
        </div>
      </div>{" "}
      <img
        src={bentobg}
        alt=""
        className="absolute bg-fixed top-0 left-0 content-center object-contain scale-105 -z-1  opacity-40"
      />
    </div>
  );
}
