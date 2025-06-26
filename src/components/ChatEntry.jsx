import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

// The ChatEntry component should use an instance of the TimeStamp component.
// The TimeStamp component expects one prop: time.

const ChatEntry = (props) => {
  const heart = props.liked ? '❤️' : '🤍';

  return (
    <div className='chat-entry local'>
      <h2 className='entry-name'>{props.sender}</h2>
      <section className='entry-bubble'>
        <p>{props.body}</p>
        <p className='entry-time'>
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className='like' onClick={() => props.onLikeToggle(props.id)}>
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatEntry;
