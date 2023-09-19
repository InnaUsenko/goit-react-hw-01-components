import css from './Profile.module.css';
export const Profile = props => {
  return (
    <div className={css.alert}>Profile Component {props.usr.username}</div>
  );
};
