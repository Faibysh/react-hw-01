import React from 'react';
import Profile from './profile/profile';
import Statistics from './statistics/statistics';
import FriendList from './friends/friends';
import TransactionHistory from './transactions/transactions';
import user from '../components/user.json';
import data from '../components/data.json';
import friends from '../components/friends.json';
import transactions from '../components/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;
