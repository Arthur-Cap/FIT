import Header from "./Components/Static/Header/header";
import "./App.css";
import SideBar from "./Components/Static/SideBar/SideBar";
import React, { useState } from 'react';

function App() {

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="App">

      <SideBar isOpen={isOpen} setOpen={setOpen}></SideBar>
      <Header isOpen={isOpen} setOpen={setOpen}></Header>
      <page></page>
    </div>
  );
}

export default App;
