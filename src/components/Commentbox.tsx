import React, { useState } from 'react';
import { Comment } from './types';
import Button from './button';

interface CommentboxProps {
  comment: Comment;
}

const Commentbox = (props: CommentboxProps) => {
  const [input, setInput] = useState('');
  const [showInputBox, setShowInputBox] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const handlenewComment=()=>{
    setShowInputBox(true);
  }
  const handleAddComment = () => {
    if (input.trim() !== '') {
      const newComment: Comment = {
        id: Math.random().toString(), // Generate a unique ID
        name: input,
        item: [],
      };
      setComments([...comments, newComment]);
      setInput('');
    }
  };

  // const handledelete=()=>{
  //   props.onDelete(props.comment.id);
  // }

  return (
    <div>
      {props.comment.id === '1' ? (
        <div className='flex'>
          <input
            type='text'
            value={input}
            autoFocus
            placeholder='type..'
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type='comment'  className='reply m-1' icon='comment'  handleClick={handleAddComment}/>
        </div>
      ) : (
        <>
        <span style={{ wordWrap: 'break-word' }}>{props.comment.name}</span>
        <div className='flex'>
        <Button type='reply'  className='reply m-1' icon='reply' handleClick={handlenewComment}/>
        <Button type='delete'  className='delete m-1' icon='delete' />

        </div>
        </>
        
      )}

     <div className='pl-10'>
      {showInputBox && (
       <div>
          <input
         type='text'
         value={input}
         autoFocus
         placeholder='type..'
         onChange={(e) => setInput(e.target.value)}
       />
       <Button type='save'  className='save m-1' icon='save'  handleClick={() => {
                setShowInputBox(false);
                handleAddComment();
              }}/>
        <Button type='cancel'  className='cnacel m-1' icon='cancel' handleClick={()=>{
          setShowInputBox(false);
          setInput('');
        }}/>

       </div>
       
      )}
      {comments.map((cmt) => (
          <Commentbox key={cmt.id} comment={cmt} />
        ))}
     </div>
    </div>
  );
};

export default Commentbox;
