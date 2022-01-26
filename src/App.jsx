import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ActivityFeed from "./components/ActivityFeed.js";
import Header from "./Header.jsx";
import Footer from "./components/Footer.js";
import axios from "axios";
const App = () => {
  const [allCalls, setAllCalls] = useState([]);
  const [archivedCalls, setArchivedCalls] = useState([])
  const [state, setState] = useState([]);
  const url = "https://aircall-job.herokuapp.com/activities";

  function allCallData() {
    axios.get(url).then((res) => {
      console.log(res.data);
      setAllCalls(res.data)
      }).catch((e) => {
        console.log("error,", e);;
    });
  }

  function archivedCallData() {
    axios.get(url).then((res) => {
      const arcData = res.data.filter((call) => {
        call.is_archived
      });
      console.log(arcData, "archivedCallData");
      setArchivedCalls(arcData)
    }).catch((e) => {
      console.log("error, ", e)
    })
  }


  useEffect(() => {
    allCallData(),
    archivedCallData()
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="container-view">
        Some activities should be here
        <ActivityFeed calls={allCalls}/>
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
