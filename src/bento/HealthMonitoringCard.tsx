import bentobg from "../assets/bento-monitor.png";
export function HealthMonitoringCard() {
  return (
    <div
      className="h-full rounded-2xl p-6 border border-gray-800/50  relative overflow-hidden group transition-all duration-500 hover:scale-[1.02]
       shadow-black/50 hover:border-cyan-500/30
      hover:shadow-cyan-500/5 hover:shadow-2xl"
    >
      <div className="flex items-end h-full ">
        {" "}
        <div className="absolute  h-full w-full  bg-gradient-to-t  from-gray-950 to-transparent scale-120 z-1"></div>
        {/* Animated Radar Visual */}
        <div className="absolute flex  justify-center items-start top-20 left-10 scale-200">
          <div className="relative w-48 h-48">
            {/* Outer rings */}
            <div className="absolute inset-0 border-1 border-cyan-500/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 border border-cyan-500/30 rounded-full"></div>
            <div className="absolute inset-4 border border-cyan-500/40 rounded-full"></div>
            {/* Central core */}
            <div className="absolute inset-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
            {/* Rotating sweep line */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div
                className="absolute top-1/2 left-1/2 w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent origin-left -translate-y-0.5 animate-spin "
                style={{ animationDuration: "3s" }}
              ></div>
            </div>
            {/* Data points */}
            <div className="absolute top-6 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div
              className="absolute bottom-8 left-8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-1/2 right-4 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>{" "}
            <div
              className="absolute top-2 right-25 w-1 h-1 bg-cyan-300 rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
        {/* Content */}
        <div className=" elative z-10">
          <h3 className="text-white text-lg mb-3">
            Real-time Health Monitoring
          </h3>
          <p className="text-[#B0B0B5] text-sm leading-relaxed">
            Continuously track system performance, resource utilization, and
            security metrics with advanced monitoring algorithms.
          </p>
        </div>{" "}
        <img
          src={bentobg}
          alt=""
          className="absolute bg-fixed -top-8 -left-8 content-center scale-90  -z-1  opacity-30"
        />
      </div>
    </div>
  );
}
