import React, {useState, useEffect} from 'react';
import ActivityFeedItems from './ActivityFeedItems';


const ActivityFeed = (props) => {
  const [callState, setCallState] = useState()
  const {calls} = props;


  const callItems = calls.map((call) => {
    return (<ActivityFeedItems key={call.id} call={call} />)
  })
return <div className="call-list">{callItems}</div>
};

export default ActivityFeed;

