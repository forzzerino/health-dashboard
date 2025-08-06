import {
  ServerCrash,
  Cpu,
  GaugeCircle,
  BellRing,
  Bot,
  DatabaseZap,
} from "lucide-react";

interface feature {
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface Features {
  heading?: string;
  features?: feature[];
}

const fts = [
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
function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            Features
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 ">
          {fts.map((feature, i) => (
            <div key={i} className="flex items-center flex-col px-4">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-blue-950/20 ring ring-cyan-500/20 text-cyan-500">
                <feature.icon />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Features };
