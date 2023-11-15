import InstanceBriefCard from "./InstanceBriefCard";
import InstanceTabs from "./InstanceTabs";
const Instance = ({ record }) => {
  return (
    <div className="Lead">
      <InstanceBriefCard record={record} />
      <InstanceTabs record={record} />
    </div>
  );
};

export default Instance;
