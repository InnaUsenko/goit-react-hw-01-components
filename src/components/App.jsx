import userData from '../data/user.json';
import dataData from '../data/data.json';
import friendData from '../data/friends.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friend-list/FriendList';

export const App = () => {
  return (
    <div
      style={{
        width: 600,
        padding: '16px',
        backgroundColor: '#E7ECF2',
      }}
    >
      <Profile usr={userData} />
      <br />
      <Statistics data={dataData}></Statistics>
      <br />
      <FriendList friends={friendData}></FriendList>
    </div>
  );
};
