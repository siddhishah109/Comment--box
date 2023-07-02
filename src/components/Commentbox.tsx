import React, { useState } from 'react';
import { Comment } from './types';
import Button from './button';

interface CommentboxProps {
  comment: Comment;
}

const Commentbox = (props: CommentboxProps) => {
  const [input, setInput] = useState('');

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
          <Button type='comment'  className='reply m-1' icon='comment'/>
        </div>
      ) : (
        <>
        <span style={{ wordWrap: 'break-word' }}>{props.comment.name}</span>
        <div className='flex'>
        <Button type='reply'  className='reply m-1' icon='reply'/>
        <Button type='delete'  className='delete m-1' icon='delete'/>

        </div>
        </>
        
      )}

     <div className='pl-4'>
     {props.comment.item?.map((cmt) => (
        <Commentbox key={cmt.id} comment={cmt} />
      ))}
     </div>
    </div>
  );
};

export default Commentbox;
