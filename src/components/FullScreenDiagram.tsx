import { useState } from "react";
import { motion } from "framer-motion";
import Diagram from "./Diagram";
import { Maximize2, Minimize2 } from "lucide-react";

export default function FullscreenDiagram() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="relative ">
      <motion.div
        layout
        transition={{ layout: { duration: 0.5, type: "spring" } }}
        className={`mx-auto ${
          isFullscreen
            ? "fixed inset-0 z-50 bg-white"
            : "w-9/12 rounded-4xl h-[350px] md:h-[600px] lg:h-[700px] border border-cyan-600 shadow-2xl shadow-cyan-300/20"
        }  shadow-lg overflow-hidden`}
      >
        <Diagram />
      </motion.div>
      <button
        onClick={() => setIsFullscreen((prev) => !prev)}
        className={`${
          isFullscreen
            ? "fixed z-50 top-12 right-12 "
            : "absolute z-50 top-12 right-1/6 "
        } bg-cyan-500  rounded-full shadow p-3 `}
      >
        {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
      </button>
    </div>
  );
}
