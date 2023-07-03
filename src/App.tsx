import React, { useState } from 'react';
import CommentBox from './components/Commentbox';
import { Comment } from './components/types';
import './App.css'
import Particlesp from './components/particles';


const App: React.FC = () => {
  const initialComment: Comment = {
    id: '1',
    name: 'Initial Comment',
    item: [],
  };

  const [comments, setComments] = useState<Comment[]>([]);

  // const handleDeleteComment = (commentId: string) => {
  //   setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
  // };
  return (
    <div className="App p-10 bg-black ">
     <Particlesp/>
      <div className=' box  '>
      <CommentBox
        comment={initialComment}

      />
      {comments.map((comment) => (
        <CommentBox
          key={comment.id}
          comment={comment}
       
        />
      ))}
      </div>
    </div>
  );
};

export default App;