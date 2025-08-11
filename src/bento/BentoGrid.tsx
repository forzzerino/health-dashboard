import { HealthMonitoringCard } from "./HealthMonitoringCard";
import { AlertNotificationsCard } from "./AlertNotificationsCard";
import { SystemMetricsCard } from "./SystemMetricsCard";
import { AIAssistantCard } from "./AIAssistantCard";
import { DataPipelineCard } from "./DataPipelineCard";

export function BentoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-7 md:grid-rows-8 gap-4 w-[90%] md:max-h-[600px]  md:max-w-[1400px] mx-auto ">
      <div className="col-span-3 md:col-span-2 md:row-span-4">
        <HealthMonitoringCard />
      </div>
      <div className="col-span-3 md:col-span-3 md:row-span-4">
        <AlertNotificationsCard />
      </div>
      <div className="col-span-3 md:col-span-2 md:row-span-8">
        <SystemMetricsCard />
      </div>
      <div className="col-span-3 md:col-span-3 md:row-span-4">
        <AIAssistantCard />
      </div>
      <div className="col-span-3 md:col-span-2 md:row-span-4">
        <DataPipelineCard />
      </div>
    </div>
  );
}
