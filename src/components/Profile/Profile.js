import PropTypes from 'prop-types';
import s from 'components/Profile/Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <p>
            <span className={s.quantity}>{followers}</span>
          </p>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <p>
            <span className={s.quantity}>{views}</span>
          </p>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <p>
            <span className={s.quantity}>{likes}</span>
          </p>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
