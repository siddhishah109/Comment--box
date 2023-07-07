
import React, { useState } from 'react';
import { Comment, Reply } from './types';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Confetti from 'react-confetti';
import ReplyComment from './reply';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

interface CommentboxProps {
  comment: Comment;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>; // Include setComments prop
  handleAddReply: (commentId: string, replyText: string) => void;
}

const Commentbox: React.FC<CommentboxProps> = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [isChecked, setIsChecked] = useState(false);


  const handleLike = () => {
    setIsLiked(!isLiked);
    setShowConfetti(true);
    setIsChecked(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };
  const handleToggleReplyForm = () => {
    setShowReplyForm(! showReplyForm);
  };
  const handleAddReply = (commentId: string, replyText: string): void => {
    if (replyText.trim() !== '') {
      const newReply: Reply = {
        id: Math.random().toString(),
        text: replyText,
      };
  
      props.setComments((prevComments) => {
        return prevComments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              replies: [...comment.replies, newReply],
            };
          }
          return comment;
        });
      });
    }
  };

  const handleDeleteComment = (commentId: string) => () => {
    props.setComments((prevComments) => {
      return prevComments.filter((comment) => comment.id !== commentId);
    });
  };
  const handleDeleteReply = (commentId: string, replyId: string) => () => {
    props.setComments((prevComments) => {
      return prevComments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: comment.replies.filter((reply) => reply.id !== replyId),
          };
        }
        return comment;
      });
    });
  };
  
  return (
<div>
<div className=" justify-center flex flex-col box3 ">
      <div className='comment-box '>
        <div className="relative inline-block w-auto mx-auto m-2 bg-white rounded-xl pt-3 overflow-hidden">
          <div style={{ overflowWrap: 'break-word' }} className="p-2 pl-10 box2 ">
            {props.comment.name}
          </div>
          <div className="flex p-2 pl-8 flex-row">

                 <IconButton onClick={handleToggleReplyForm} ><ReplyAllIcon fontSize='large'/></IconButton>
                <IconButton onClick={handleDeleteComment(props.comment.id)} ><DeleteIcon fontSize='large'/></IconButton>
                <FormControlLabel
              control={
                <Checkbox
                  disabled={isChecked} 
                  icon={<FavoriteBorderIcon fontSize='medium'/>}
                  checkedIcon={<FavoriteIcon color="error" fontSize='large'/>}
                  name="checkedH"
                  onClick={handleLike}
                />
              }
              label="."
            />
          </div>
          {showConfetti && (
        <div className="confetti-container">
          <Confetti />
        </div>
      )}
        
        </div>
      </div>

      
       {props.comment.replies.map((reply) => (
          <div className='comment-box-R border-l-4 border-gray-400 ml-9 '>
            <div key={reply.id} className="reply-container  justify-center relative inline-block w-auto mx-auto m-2 bg-white rounded-xl pt-3 ml-12  ">
            <div style={{ overflowWrap: 'break-word' }} className=" pl-5 p-5 box2 ">{reply.text}</div>
            <IconButton onClick={handleDeleteReply(props.comment.id, reply.id)} ><DeleteIcon className="ml-5" fontSize='medium'/></IconButton>
           
          </div>
            </div>
        ))}
    </div>
    {showReplyForm && <ReplyComment handleAddReply={handleAddReply} commentId={props.comment.id} />}
</div>
    
  );
};

export default Commentbox;

