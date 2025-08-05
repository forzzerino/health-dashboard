import {
  UserCog,
  BarChart4,
  DatabaseZap,
  ServerCog,
  Workflow,
  Bot,
  Signal,
  FileText,
  Bell,
  LayoutDashboard,
} from "lucide-react";
interface module {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Modules {
  heading?: string;
  modules?: module[];
}

const Modules = ({
  heading = "Modules",
  modules = [
    {
      title: "AOM (Account & Order Management)",
      description:
        "Manages customer accounts and orders, handles usage and balance inquiries, and sends password recovery emails.",
      icon: <UserCog className="size-6" />,
    },
    {
      title: "CHF (Charging Function)",
      description:
        "Dynamically deducts data, SMS, and voice balances as services are used. Also responsible for tariff management.",
      icon: <BarChart4 className="size-6" />,
    },
    {
      title: "ABMF (Account & Balance Management Function)",
      description:
        "Processes new user registrations, tariff selections, and usage records from Kafka to ensure balance consistency across the system.",
      icon: <DatabaseZap className="size-6" />,
    },
    {
      title: "CGF (Charging Gateway Function)",
      description:
        "Receives service usage transaction records via Kafka and forwards processed data for charging and database updates.",
      icon: <ServerCog className="size-6" />,
    },
    {
      title: "TGF (Traffic Generator Function)",
      description:
        "Simulates network traffic (voice, SMS, data) in a test environment and sends events to the Charging Function via REST API.",
      icon: <Workflow className="size-6" />,
    },
    {
      title: "NF (Notification Function)",
      description:
        "Delivers real-time notifications like low balance or successful transactions via SMS, email, or push notifications.",
      icon: <Bell className="size-6" />,
    },
    {
      title: "Chatbot (CELI)",
      description:
        "AI-powered assistant that helps users with real-time queries about balance, active packages, billing, and app navigation.",
      icon: <Bot className="size-6" />,
    },
    {
      title: "Kafka",
      description:
        "Enables real-time data streaming between components for user registrations, charging events, notifications, and more.",
      icon: <Signal className="size-6" />,
    },
    {
      title: "VoltDB",
      description:
        "In-memory high-speed database providing instant balance updates for real-time queries without delay.",
      icon: <FileText className="size-6" />,
    },
    {
      title: "Oracle DB",
      description:
        "Stores all persistent backend data, including subscriber profiles, tariff configurations, and detailed usage logs.",
      icon: <DatabaseZap className="size-6" />,
    },
    {
      title: "Hazelcast",
      description:
        "Distributed in-memory data grid for real-time data sharing and caching, deployed in Google Cloud.",
      icon: <ServerCog className="size-6" />,
    },
    {
      title: "Dashboard",
      description:
        "A centralized interface that lets administrators monitor all system metrics and statuses in real time.",
      icon: <LayoutDashboard className="size-6" />,
    },
  ],
}: Modules) => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            {heading}
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 ">
          {modules.map((module, i) => (
            <div key={i} className="flex items-center flex-col px-4">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-blue-950/20 ring ring-cyan-500/20 text-cyan-500">
                {module.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{module.title}</h3>
              <p className="text-muted-foreground">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Modules };
