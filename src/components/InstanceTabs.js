import { useState } from "react";
// import Related from "./Related";
import InstanceDetails from "./InstanceDetails";
// import News from "./News";

const InstanceTabs = ({ record }) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div className="tabs">
        <div
          className={`${toggleState === 1 ? "tab active-tab" : "tab"}`}
          onClick={() => toggleTab(1)}
        >
          Details
        </div>
        <div
          className={`${toggleState === 2 ? "tab active-tab" : "tab"}`}
          onClick={() => toggleTab(2)}
        >
          Related
        </div>
        <div
          className={`${toggleState === 3 ? "tab active-tab" : "tab"}`}
          onClick={() => toggleTab(3)}
        >
          News
        </div>
      </div>

      <div className="contents">
        <div
          className={`${
            toggleState === 1 ? "content active-content" : "content"
          }`}
        >
          <InstanceDetails record={record} />
        </div>

        <div
          className={`${
            toggleState === 2 ? "content active-content" : "content"
          }`}
        >
          Related....
          {/* <Related /> */}
        </div>

        <div
          className={`${
            toggleState === 3 ? "content active-content" : "content"
          }`}
        >
          News....
          {/* <News /> */}
        </div>
      </div>
    </div>
  );
};

export default InstanceTabs;
