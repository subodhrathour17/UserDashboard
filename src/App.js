import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UserTable from "./components/UserTable";
import "./style/App.css";

const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className='content'>
        <Sidebar />
        <UserTable />
      </div>
    </div>
  );
};

export default App;
