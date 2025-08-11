import { Bell } from "lucide-react";
import BentoAlert from "../assets/bento-alerts.png";
export function AlertNotificationsCard() {
  return (
    <div
      className="h-full rounded-2xl p-6 border border-gray-800/50 shadow-2xl relative overflow-hidden group transition-all duration-500 hover:scale-[1.02]
       shadow-black/50 hover:border-cyan-500/30
      hover:shadow-cyan-500/5 hover:shadow-2xl"
    >
      <div className="flex items-end h-full ">
        <div className="absolute  h-full w-full top-0 bg-gradient-to-t  from-gray-950 to-transparent scale-120 z-1"></div>{" "}
        <div className="absolute top-10 right-40 scale-200 flex justify-center items-start pt-6 mb-8">
          <div className="relative">
            {/* Pulsing rings */}
            <div className="absolute -inset-8 border border-cyan-500/90 rounded-full animate-ping"></div>
            <div
              className="absolute -inset-6 border border-cyan-500/50 rounded-full animate-ping"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute -inset-4 border border-cyan-500/70 rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Central bell */}
            <div className="relative w-36 h-36 bg-gradient-to-t from-cyan-600 to-cyan-500 rounded-full  shadow-2xl shadow-cyan-500/50">
              <Bell className="w-24 h-24 text-gray-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Notification dots */}
            <div className="absolute -top-0 left-24 w-8 h-8 bg-red-500 rounded-full text-lg flex items-center justify-center text-white animate-bounce">
              3
            </div>
          </div>
        </div>
        <div className="relative z-10 ">
          <h3 className="text-white text-lg mb-3">Usage Alert Notifications</h3>
          <p className="text-[#B0B0B5] text-sm leading-relaxed mb-4">
            Get instant notifications about suspicious activities, threshold
            breaches, and security incidents across your infrastructure.
          </p>
        </div>
      </div>{" "}
      <img
        src={BentoAlert}
        alt=""
        className="absolute bg-fixed top-0 left-0 content-center object-contain scale-105 -z-1 opacity-40"
      />
    </div>
  );
}
