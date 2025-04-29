import React, { useState } from "react";
import "../style/Sidebar.css";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className='sidebar-container'>
      <div className='hamburger' onClick={toggleSidebar}>
        <FaBars />
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Dashboard</li>
          <li className='active'>Users</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
