import React, { useState, useEffect } from "react";
import ActivityFeedItems from "./ActivityFeedItems";
import "../css/ActivityFeed.css";

const ActivityFeed = (props) => {
  const [showCallDetail, setShowCallDetail] = useState(false);
  const {
    allCalls,
    setAllCalls,
    archivedCalls,
    setArchivedCalls,
    state,
    setState,
  } = props;

  return (
    <div className="call-list">
      {state === "CURRENT" && <h2>All Calls</h2>}
      {state === "ARCHIVE" && <h2>Archived Calls</h2>}
      <div className="call-list-items">
        {state === "CURRENT" &&
          allCalls.map((call) => {
            return (
              <ActivityFeedItems
                key={call.id}
                call={call}
                allCalls={allCalls}
                setAllCalls={setAllCalls}
                archivedCalls={archivedCalls}
                setArchivedCalls={setArchivedCalls}
                state={state}
                setState={setState}
              />
            );
          })}
          {state === "ARCHIVE" &&
          archivedCalls.map((call) => {
            return (
              <ActivityFeedItems
                key={call.id}
                call={call}
                allCalls={allCalls}
                setAllCalls={setAllCalls}
                archivedCalls={archivedCalls}
                setArchivedCalls={setArchivedCalls}
                state={state}
                setState={setState}
              />
            );
          })}{" "}
      </div>
    </div>
  );
};

export default ActivityFeed;
