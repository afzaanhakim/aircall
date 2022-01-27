import React, { useState } from "react";
import "../css/ActivityFeedItems.css";
import {
  FiPhoneIncoming,
  FiPhoneOutgoing,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import ReactTimeago from "react-timeago";
import axios from "axios";
import { RiArchiveDrawerLine } from "react-icons/ri";

const ActivityFeedItems = (props) => {
  // const [showFull, setShowFull] = useState(false);
  const {
    allCalls,
    call,
    setAllCalls,
    archivedCalls,
    setArchivedCalls,
    state,
    setState,
  } = props;

  const handleArchive = () => {
    axios
      .post(`https://aircall-job.herokuapp.com/activities/${call.id}`, {
        is_archived: !call.is_archived,
      })
      .then((res) => {
        if(allCalls){
        setAllCalls(allCalls.filter((c) => c.id !== res.data.id));
        setArchivedCalls([...archivedCalls, call]);
      }
      else {
        setAllCalls([])
      }
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };

  const handleUnarchiveCall = () => {
    axios
      .post(`https://aircall-job.herokuapp.com/activities/${call.id}`, {
        is_archived: call.is_archived,
      })
      .then((res) => {
        if (archivedCalls) {
          setArchivedCalls(archivedCalls.filter((c) => c.id !== res.data.id));
        } else {
          setArchivedCalls([]);
        }
        setAllCalls([...allCalls, call]);
        setState("ARCHIVE");
      })
      .catch((e) => console.log(e, "is the error l55"));
  };

  return (
    <div className="caller-info-items">
      <div className="activity-feed-items">
        <div className="icons-callerInfo">
          <div className="icons">
            <p>
              {call.direction === "inbound" && <FiPhoneIncoming size={20} />}
            </p>
            <p>
              {call.direction === "outbound" && <FiPhoneOutgoing size={20} />}
            </p>
          </div>
          <div className="call-info">
            <p>
              <strong>
                {call.from} <i> ({call.call_type})</i>
              </strong>
            </p>
            <p>
              tried to call on <strong>{call.via}</strong>
            </p>
          </div>{" "}
        </div>
        <div className="date">
          {" "}
          <p>
            <ReactTimeago date={call.created_at} />{" "}
          </p>
          {state === "CURRENT" && (
            <RiArchiveDrawerLine size={30} onClick={() => handleArchive()} />
          )}
          {state === "ARCHIVE" && (
            <RiArchiveDrawerLine
              size={30}
              onClick={() => {
                handleUnarchiveCall();
              }}
            />
          )}
        </div>{" "}
      </div>
    </div>
  );
};

export default ActivityFeedItems;
