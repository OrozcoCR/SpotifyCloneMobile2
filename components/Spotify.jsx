import React from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
export default function Spotify() {
  return (
    <div>
      <div className="s_body">
        <Sidebar />
        <div className="body">
          <Navbar />
          <div className="body_c"></div>
        </div>
      </div>
      <div className="spotify_footer">
        <Footer />
      </div>
    </div>
  );
}
