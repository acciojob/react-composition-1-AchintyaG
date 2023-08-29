import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (content) => {
    setActiveTab(content);
  };

  return (
    <div >
      <ul>
        {tabs.map((tab, content) => (
           <li
              key={value}
              className={`tab-item ${value === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(value.content)}
            >
              </li>
        ))}        
      </ul >
      {setActiveTab && <p>This is the content for{activeTab}</p>}
    </div >
  );
};

export default Tabs;