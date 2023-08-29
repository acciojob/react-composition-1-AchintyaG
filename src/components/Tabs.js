import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

<<<<<<< HEAD
  
 function handleTabClick(content){
  setActiveTab(content);
 }
  return (
    <div>
      <ul>
        {tabs.map((value) => 
           <li onClick={() => handleTabClick(value.content)}>{value.title}
=======
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
>>>>>>> 3e61863d9c19249559c0ff9c87f0c97a9e8546f8
              </li>
        )}        
      </ul >
<<<<<<< HEAD
      {activeTab && <p>This is the content for{activeTab}.</p>}
=======
      {setActiveTab && <p>This is the content for{activeTab}</p>}
>>>>>>> 3e61863d9c19249559c0ff9c87f0c97a9e8546f8
    </div >
  );
};

export default Tabs;