import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  
 function handleTabClick(content){
  setActiveTab(content);
 }
  return (
    <div>
      <ul>
        {tabs.map((value) => 
           <li onClick={() => handleTabClick(value.content)}>{value.title}
              </li>
        )}        
      </ul >
      {activeTab && <p>This is the content for{activeTab}.</p>}
    </div >
  );
};

export default Tabs;