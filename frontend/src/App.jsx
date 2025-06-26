import React from "react";
import 'remixicon/fonts/remixicon.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoFeed from "./components/VideoFeed";

export default () => {

  return (
    <>
      <Header />
      <Sidebar />
      <VideoFeed />
    </>
  )
}