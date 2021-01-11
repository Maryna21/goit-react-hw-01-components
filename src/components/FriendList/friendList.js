import PropTypes from 'prop-types';
import s from 'components/FriendList/friendList.module.css';
import FriendListItem from 'components/FriendList/friendListItem';
export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.array,
};
