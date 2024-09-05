import { useState } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { SideBar } from './components/sideBar/sideBar';

export const App = () => {
const [showSideBar, setShowSideBar] = useState<boolean>(false)

  return (
    <>
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar}  />
    </>
  );
}

