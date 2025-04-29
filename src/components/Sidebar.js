import React from "react";
import "../style/Sidebar.css";

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <ul>
        <li>Dashboard</li>
        <li className='active'>Users</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
