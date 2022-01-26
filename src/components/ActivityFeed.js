import React, {useState, useEffect} from 'react';
import ActivityFeedItems from './ActivityFeedItems';
import "../css/ActivityFeed.css"

const ActivityFeed = (props) => {
  const [callState, setCallState] = useState()
  const {calls} = props;


  const callItems = calls.map((call) => {
    return (<ActivityFeedItems key={call.id} call={call} />)
  })
return <div className="call-list"><h2>All Calls</h2><div className="call-list-items">{callItems} </div></div>
};

export default ActivityFeed;

