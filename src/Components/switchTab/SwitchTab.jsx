import React, { useState } from "react";
import "./styleTab.css"
const SwitchTab = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const acttiveTab = (tab, index) => {
    // console.log(index);
    setLeft(100 * index);
    // console.log(left);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTab">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""} `}
            onClick={() => acttiveTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }}></span>
      </div>
    </div>
  );
};

export default SwitchTab;
