import FullscreenDiagram from "../components/FullScreenDiagram";

import {
  ServerCrash,
  Cpu,
  GaugeCircle,
  BellRing,
  Bot,
  DatabaseZap,
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
function Architecture() {
  return (
    <div className="relative isolate overflow-x-hidden">
      <div
        aria-hidden="true"
        className="absolute -z-10 -translate-x-1/6 translate-y-24 rotate-[0deg] xl:-top-6 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-360 bg-linear-to-tr from-[#4fb0ff] to-[#36afff] opacity-30"
        />
      </div>
      <div className="overflow-hidden py-16 sm:py-24   ">
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
    </div>
  );
}

export default Architecture;
