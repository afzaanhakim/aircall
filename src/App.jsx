import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ActivityFeed from "./components/ActivityFeed.js";
import Header from "./Header.jsx";
import Footer from "./components/Footer.js";
import axios from "axios";
const App = () => {
  const [allCalls, setAllCalls] = useState([]);
  const [archivedCalls, setArchivedCalls] = useState([]);
  const [state, setState] = useState("CURRENT");
  const url = "https://aircall-job.herokuapp.com/activities";

  const allCallData = () => {
    axios
      .get(url)
      .then((res) => {
        setAllCalls(res.data);
      })
      .catch((e) => {
        console.log("error,", e);
      });
      console.log(allCalls)
  }

  const archivedCallData = () => {
    axios
      .get(url)
      .then((res) => {
        const arcData = res.data.filter((call) => {
          call.is_archived;
        });
        setArchivedCalls(arcData);
      })
      .catch((e) => {
        console.log("error, ", e);
      });
  }

  useEffect(() => {
    allCallData(), archivedCallData();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="container-view">
        {state === "CURRENT" && (
          <ActivityFeed
            allCalls={allCalls}
            setAllCalls={setAllCalls}
            archivedCalls={archivedCalls}
            setArchivedCalls={setArchivedCalls}
            state={state}
            setState={setState}
          />
        )}
        {state === "ARCHIVE" && (
          <ActivityFeed
            allCalls={allCalls}
            setAllCalls={setAllCalls}
            archivedCalls={archivedCalls}
            setArchivedCalls={setArchivedCalls}
            state={state}
            setState={setState}
          />
        )}
      </div>

      <Footer state={state} setState={setState} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
