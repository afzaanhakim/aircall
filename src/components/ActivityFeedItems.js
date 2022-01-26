import React from 'react';

const ActivityFeedItems = (props) => {
  const {call} = props;
return <div className="activity-feed-items"><p>{call.direction}</p><p>{call.from}</p><p>{call.call_type}</p></div>
};

export default ActivityFeedItems;

