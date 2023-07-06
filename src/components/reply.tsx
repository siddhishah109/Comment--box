import React, { useState } from 'react';
import Buttonb from './button';

interface ReplyCommentProps {
  handleAddReply: (commentId: string, replyText: string) => void;
  commentId: string;
}

const ReplyComment: React.FC<ReplyCommentProps> = ({ handleAddReply ,commentId }) => {
  const [input, setInput] = useState('');
  const [showInputBox, setShowInputBox] = useState(true);

  const handleReplyComment = () => {
    setInput('');
    handleAddReply(commentId, input);
    setShowInputBox(false);
  };

  const handleCancelReply = () => {
    setInput('');
    setShowInputBox(false);
  };

  return (
    <div>
      {showInputBox &&(<div className="box2">
      <input
        type="text"
        value={input}
        autoFocus
        className="bg-gray-50 border border-amber-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="type.."
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex">
        <Buttonb
          type="save"
          className="save m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          icon="save"
       
          handleClick={handleReplyComment}
        />
        <Buttonb
          type="cancel"
          className="cancel m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
          icon="cancel"
          handleClick={handleCancelReply}
        />
      </div>

    </div>)}
    </div>
  );
};

export default ReplyComment;
