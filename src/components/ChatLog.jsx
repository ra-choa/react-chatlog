import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  return (
    <div className='chat-log'>
      {props.entries.map((msg) => (
        <ChatEntry
          key={msg.id}
          id={msg.id}
          sender={msg.sender}
          body={msg.body}
          timeStamp={msg.timeStamp}
          liked={msg.liked}
          onLikeToggle={props.onLikeToggle}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatLog;
