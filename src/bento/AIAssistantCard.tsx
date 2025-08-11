import celi from "../assets/celi.svg";
import BentoAlert from "../assets/bento-celi.png";

export function AIAssistantCard() {
  return (
    <div
      className="h-full  rounded-2xl p-6 border border-gray-800/50 shadow-2xl relative overflow-hidden group transition-all duration-500 hover:scale-[1.02]
       shadow-black/50 hover:border-cyan-500/30
      hover:shadow-cyan-500/5 hover:shadow-2xl"
    >
      <div className="">
        <div className="absolute  h-full w-full  bg-gradient-to-t  from-gray-950 to-transparent scale-120 "></div>
        <div className="relative flex justify-center items-start pt-4 mb-6">
          <div className="relative">
            {/* AI Bot Head */}
            <div className=" w-28 h-28 shadow-2xl bg-[#070514]  rounded-2xl shadow-cyan-500/50 border border-cyan-300/40 p-4">
              <img src={celi} alt="celi" />
              {/* Neural network lines */}
              <div className="absolute inset-2 border border-cyan-300/60 rounded-xl"></div>
            </div>

            {/* Hologram scan lines */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse"
              style={{ animationDuration: "2s" }}
            ></div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-white text-lg mb-3">AI-Powered Assistant (CELI)</h3>
        <p className="text-[#B0B0B5] text-sm leading-relaxed mb-4">
          Advanced AI assistant capable of threat analysis, automated responses,
          and intelligent security recommendations.
        </p>
      </div>{" "}
      <img
        src={BentoAlert}
        alt=""
        className="absolute bg-fixed -top-10 left-6 content-center object-contain scale-80  -z-10 opacity-40"
      />
    </div>
  );
}
