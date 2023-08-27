
import React,{useState} from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {
  const tabs = [
    { title: 'Tab 1', content: 'Content for Tab 1' },
    { title: 'Tab 2', content: 'Content for Tab 2' },
    { title: 'Tab 3', content: 'Content for Tab 3' },
  ];

  return (
    <div className="app-container">
      <Tabs tabs={tabs} />
    </div>
  )
}

export default App
