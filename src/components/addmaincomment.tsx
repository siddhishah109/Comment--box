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
    <div className="flex mb-1 sticky">
      <input
        className="relative bg-gray-500 border border-gray-100 text-gray-200 text-sm mr-3 rounded-lg focus:ring-amber-500 focus:border-amber-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 w-96 dark:focus:border-blue-500"
        type="text"
        value={input}
        autoFocus
        placeholder="Type..........."
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="contained" onClick={handleSendComment} endIcon={<SendIcon />}>
        Send
      </Button>
    </div>
  );
};

export default SendComment;