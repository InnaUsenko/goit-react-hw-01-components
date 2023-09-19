import userData from '../data/user.json';
import { Profile } from './profile/Profile';

export const App = () => {
  return <Profile usr={userData} />;
};
