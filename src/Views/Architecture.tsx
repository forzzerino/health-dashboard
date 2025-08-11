import {
  UserCog,
  BarChart4,
  DatabaseZap,
  ServerCog,
  Workflow,
  Signal,
  FileText,
  Bell,
  LayoutDashboard,
} from "lucide-react";

const modules = [
  {
    title: "AOM (Account & Order Management)",
    description:
      "Manages customer accounts and orders, handles usage and balance inquiries, and sends password recovery emails.",
    icon: UserCog,
  },
  {
    title: "Hazelcast",
    description:
      "Distributed in-memory data grid for real-time data sharing and caching, deployed in Google Cloud.",
    icon: ServerCog,
  },
  {
    title: "TGF (Traffic Generator Function)",
    description:
      "Simulates network traffic (voice, SMS, data) in a test environment and sends events to the Charging Function via REST API.",
    icon: Workflow,
  },
  {
    title: "CHF (Charging Function)",
    description:
      "Dynamically deducts data, SMS, and voice balances as services are used. Also responsible for tariff management.",
    icon: BarChart4,
  },
  {
    title: "Kafka",
    description:
      "Enables real-time data streaming between components for user registrations, charging events, notifications, and more.",
    icon: Signal,
  },
  {
    title: "VoltDB",
    description:
      "In-memory high-speed database providing instant balance updates for real-time queries without delay.",
    icon: FileText,
  },
  {
    title: "Oracle DB",
    description:
      "Stores all persistent backend data, including subscriber profiles, tariff configurations, and detailed usage logs.",
    icon: DatabaseZap,
  },
  {
    title: "ABMF (Account & Balance Management Function)",
    description:
      "Processes new user registrations, tariff selections, and usage records from Kafka to ensure balance consistency across the system.",
    icon: DatabaseZap,
  },
  {
    title: "CGF (Charging Gateway Function)",
    description:
      "Receives service usage transaction records via Kafka and forwards processed data for charging and database updates.",
    icon: ServerCog,
  },
  {
    title: "NF (Notification Function)",
    description:
      "Delivers real-time notifications like low balance or successful transactions via SMS, email, or push notifications.",
    icon: Bell,
  },
  {
    title: "Dashboard",
    description:
      "A centralized interface that lets administrators monitor all system metrics and statuses in real time.",
    icon: LayoutDashboard,
  },
];

function Architecture() {
  return (
    <section id="architecture" className="relative isolate overflow-hidden">
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
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8 ">
          {" "}
          <div className="mx-auto">
            <div className="lg:pt-4 lg:pr-8">
              <p className=" text-3xl text-center font-semibold tracking-tight text-pretty  sm:text-5xl">
                Explore System Architecture
              </p>
              <dl className="mt-10 md:space-y-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 md:gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 ">
                {modules.map((module, i) => (
                  <div key={i} className="relative pl-9 ">
                    <dt className="inline font-semibold ">
                      <div className="scroll-m-20 border-b-2 mb-1 border-cyan-700">
                        <module.icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 size-5 text-cyan-400"
                        />
                        {module.title}
                      </div>
                    </dt>{" "}
                    <dd className="inline text-[#B0B0B5] text-sm leading-relaxed mb-4 text-shadow-lg text-shadow-black/30">
                      {module.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;
