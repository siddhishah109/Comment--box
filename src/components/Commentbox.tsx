import React, { useState } from 'react';
import { Comment } from './types';
import Buttonb from './button';
import Button from '@mui/material/Button';
import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

interface CommentboxProps {
 
  comment: Comment;
}

const Commentbox = (props: CommentboxProps) => {
  const [input, setInput] = useState('');
  const [showInputBox, setShowInputBox] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const handlenewComment = () => {
    setShowInputBox(true);
  };
  const handleAddComment = () => {
    if (input.trim() !== '') {
      const newComment: Comment = {
        id: Math.random().toString(),
        name: input,
        item: [],
      };
      setComments([newComment,...comments]);
      setInput('');
    }
  };

const handleDelete = (commentId: string) => {
  setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
};
  return (
    <div>
      {props.comment.id === '1' ? (
        <div className='flex mb-1'>
          <input
          className='bg-gray-500 border border-gray-100 text-gray-200 text-sm mr-3 rounded-lg focus:ring-amber-500 focus:border-amber-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 w-96 dark:focus:border-blue-500'
            type='text'
            value={input}
            autoFocus
            placeholder='Type...........'
            onChange={(e) => setInput(e.target.value)}
          />
          {/* <Buttonb
            type='Comment'
            className='reply m-1  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            icon='Comment'
            handleClick={handleAddComment}

          /> */}
          <Button variant="contained"  onClick={handleAddComment} endIcon={<SendIcon />}>
        Send
      </Button>

        </div>
      ) : (
        <>
         <div>
         <div className='inline-block w-auto mx-auto m-2 bg-slate-400 rounded-xl pt-3'>
         <div style={{ overflowWrap: 'break-word' }} className='p-2 pl-5 box2 '>{props.comment.name}</div>
          <div className='flex p-2'>
            <Buttonb
              type='Reply'
              className='reply mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
              icon='reply'
              handleClick={handlenewComment}
            />
             
    

               <FormControlLabel 
        control={<Checkbox icon={<FavoriteBorderIcon />} 
                  checkedIcon={<FavoriteIcon color='error'/>}
          name="checkedH" />}
        label="."
      />
            {/* <Button
              type='delete'
              className='delete m-1'
              icon='delete'
              handleClick={() => handleDelete(props.comment.id)}
            /> */}
          </div>
         </div>
         </div>
        </>
      )}

      <div className='pl-4 border-l '>
        {showInputBox && (
          <div className='box2'>
            <input
              type='text'
              value={input}
              autoFocus
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='type..'
              onChange={(e) => setInput(e.target.value)}
            />
            <div className='flex'>
            <Buttonb
              type='save'
              className='save m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
              icon='save'
              handleClick={() => {
                setShowInputBox(false);
                handleAddComment();
              }}
            />
            <Buttonb
              type='cancel'
              className='cancel m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full '
              icon='cancel'
              handleClick={() => {
                setShowInputBox(false);
                setInput('');
              }}

              
              
            />





              </div>
          </div>
        )}


{comments.map((nestedComment) => (
          <Commentbox
            key={nestedComment.id}
            comment={nestedComment}
           
          />
        ))}
      </div>
    </div>
  );
};

export default Commentbox;

