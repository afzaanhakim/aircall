import React from "react";
import "../css/ActivityFeedItems.css";
import { FiPhoneIncoming, FiPhoneOutgoing } from "react-icons/fi";
import ReactTimeago from "react-timeago";

const ActivityFeedItems = (props) => {
  const { call } = props;

  return (
    <div className="activity-feed-items">
      <div className = "icons-callerInfo">
      <div className="icons">
      <p>{call.direction === "inbound" && <FiPhoneIncoming size={20} />}</p>
      <p>{call.direction === "outbound" && <FiPhoneOutgoing size={20} />}</p>
      </div>
      <div className="call-info">
        <p><strong>{call.from}</strong></p>
        <p>{call.duration} minutes</p>
      </div>{" "}
      </div>
      <div className="date">
        {" "}
        <p>
          <ReactTimeago date={call.created_at} />{" "}
        </p>
      </div>{" "}
    </div>
  );
};

export default ActivityFeedItems;
