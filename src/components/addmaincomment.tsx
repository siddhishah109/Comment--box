import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

interface SendCommentProps {
  handleAddComment: (commentText: string) => void;
}

const SendComment: React.FC<SendCommentProps> = ({ handleAddComment }) => {
  const [input, setInput] = useState('');

  const handleSendComment = () => {
    if (input.trim() !== '') {
      handleAddComment(input);
      setInput('');
    }
  };

  return (
    <div className="flex mb-1 sticky justify-center bg-white p-5 tb  ">
       <textarea
        className="main-text-area relative  border-2 border-gray-300 text-gray-700 border-grey-700 rounded-lg p-4 resize-none mr-5"
        value={input}
        autoFocus
        placeholder="Add a comment"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="contained" className="h-12 " onClick={handleSendComment} endIcon={<SendIcon />}>
        Send
      </Button>
    </div>
  );
};

export default SendComment;