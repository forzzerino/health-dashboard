import FullscreenDiagram from "./FullScreenDiagram";
import { useMotionValue, motion, animate, useTransform } from "motion/react";
import {
  ServerCrash,
  Cpu,
  GaugeCircle,
  BellRing,
  Bot,
  DatabaseZap,
} from "lucide-react";
import { useEffect } from "react";
import titleWhite from "../assets/title-white.png";

const features = [
  {
    name: "Real-time Health Monitoring",
    description:
      "Continuously monitors each backend module’s operational status and verifies JAR processes, uptime, and health signals.",
    icon: Cpu,
  },
  {
    name: "Usage Alert Notifications",
    description:
      "Notifies users via SMS or Email when data, voice or SMS usage exceeds defined thresholds, reducing bill shock.",
    icon: BellRing,
  },
  {
    name: "System Load & Metrics",
    description:
      "Displays CPU, RAM, and Disk usage per module, allowing proactive detection of bottlenecks in real time.",
    icon: GaugeCircle,
  },
  {
    name: "Fault Detection & Logging",
    description:
      "Provides immediate visibility into system failures, capturing timestamped logs and ensuring reliable recovery mechanisms.",
    icon: ServerCrash,
  },
  {
    name: "AI-Powered Assistant (CELI)",
    description:
      "CELI offers intelligent, real-time support to guide users and answer billing or usage-related questions across platforms.",
    icon: Bot,
  },
  {
    name: "Reliable Data Pipeline",
    description:
      "Kafka, OracleDB, and VoltDB integration ensures accurate, timely, and synchronized data across all components.",
    icon: DatabaseZap,
  },
];
type HTMLContentProps = {
  value: number;
};

export function HTMLContent({ value }: HTMLContentProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 5 });
    return () => controls.stop();
  }, [count, value]);

  return <motion.pre>{rounded}</motion.pre>;
}

export default function LandingPage() {
  return (
    <div className="min-h-screen  ">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="pt-12 sm:pt-16">
          <div className="md:mx-auto mx-12 lg:max-w-7xl lg:px-8  box-border ">
            <img src={titleWhite} alt="" className="" />
            <p className=" mt-2 text-center text-4xl md:text-6xl font-semibold ">
              <span className="italic font-extralight font-mono text-cyan-300 ">
                AI-Powered
              </span>{" "}
              Online Charging System
            </p>
          </div>
        </div>{" "}
      </motion.div>{" "}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {/* <Feature43 /> */}
        <div className="overflow-hidden  py-24 sm:py-32   ">
          <div className="mx-auto max-w-[1500px] px-6 lg:px-8 ">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg flex flex-col ">
                  <p className=" text-3xl font-semibold tracking-tight text-pretty  sm:text-5xl">
                    Explore System Architecture
                  </p>
                </div>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7  lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9 ">
                      <dt className="inline font-semibold ">
                        <div className="scroll-m-20 border-b-2 mb-1 border-cyan-700">
                          <feature.icon
                            aria-hidden="true"
                            className="absolute top-1 left-1 size-5 text-cyan-400"
                          />
                          {feature.name}
                        </div>
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <FullscreenDiagram />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
