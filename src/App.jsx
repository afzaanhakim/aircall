import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ActivityFeed from "./components/ActivityFeed.js";
import Header from "./Header.jsx";
import axios from "axios";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">Some activities should be here</div>

      <ActivityFeed />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
