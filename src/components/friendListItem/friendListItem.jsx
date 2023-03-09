import styles from './friendListItem.module.css';

const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <li className={styles['friend-list--item']}>
      <span className={isOnline ? styles.online : styles.offline}>
        {isOnline}
      </span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
