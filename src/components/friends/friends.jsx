import React from 'react';
// import styles from './statistics.module.css';
// import PropTypes from 'prop-types';

const FriendList = (
  {
friends 
  }) => {
  return (
<ul className="friendList">
  {friends.map(friend => (
         <li className="item">
      <span className="status">{friend.isOnline }</span>
  <img className="avatar" src={friend.avatar } alt="User avatar" width="48" />
  <p className="name">{friend.name }</p>
</li>
      ))}
</ul>
)
}


export default FriendList