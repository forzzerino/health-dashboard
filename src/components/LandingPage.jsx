import FullscreenDiagram from "./FullScreenDiagram";
import {
  ServerCrash,
  Cpu,
  GaugeCircle,
  BellRing,
  Bot,
  DatabaseZap,
  Italic,
} from "lucide-react";

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

export default function LandingPage() {
  return (
    <div className="min-h-screen ">
      <div className="bg-gray-900 text-white pt-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center font-semibold text-2xl text-indigo-600">
            Cellenta
          </h2>
          <p className="mx-auto mt-2 text-center text-4xl font-semibold tracking-tight text-balance text-gray-200 sm:text-9xl">
            <span className="italic font-extralight font-mono ">
              AI Powered
            </span>{" "}
            Online Charging System
          </p>
        </div>
      </div>

      {/* ==== Diagram Bölümü ==== */}
      <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg flex flex-col ">
                <p className=" text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                  Explore System Architecture
                </p>
              </div>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-400"
                      />
                      {feature.name}
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
    </div>
  );
}
