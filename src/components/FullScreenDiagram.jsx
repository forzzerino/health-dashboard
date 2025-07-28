import { useState } from "react";
import { motion } from "framer-motion";
import Diagram from "./Diagram";
import { Maximize2, Minimize2 } from "lucide-react";

export default function FullscreenDiagram() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="relative">
      {" "}
      <motion.div
        layout
        transition={{ layout: { duration: 0.5, type: "spring" } }}
        className={`mx-auto ${
          isFullscreen
            ? "fixed  inset-0 z-50 bg-white"
            : "w-[350px] md:w-[600px] lg:w-[800px]  rounded-4xl h-[350px] md:h-[600px] lg:h-[800px] border-2 border-green-600 shadow-xl shadow-green-300/50"
        }  shadow-lg overflow-hidden`}
      >
        <Diagram />
      </motion.div>
      <button
        onClick={() => setIsFullscreen((prev) => !prev)}
        className={`${
          isFullscreen
            ? "fixed z-50 top-12 right-12 "
            : "absolute z-50 top-12 right-12 "
        } bg-green-500  rounded-full shadow p-3 `}
      >
        {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
      </button>
    </div>
  );
}
