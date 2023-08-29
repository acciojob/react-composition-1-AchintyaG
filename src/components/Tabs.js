import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <ul>
        {tabs.map((tab, index) => (
           <li
              key={index}
              className={`tab-item ${index === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              </li>
        ))}        
      </ul >
      {setActiveTab && <p>This is the content for{activeTab.content}</p>}
    </div >
  );
};

export default Tabs;