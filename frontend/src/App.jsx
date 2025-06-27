import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoFeed from "./components/VideoFeed";

export default () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const handleClickSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <>
      <Header handleClickSidebar={handleClickSidebar} />
      <Sidebar showSidebar={showSidebar} />
      <VideoFeed />
    </>
  )
}