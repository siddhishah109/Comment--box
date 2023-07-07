import React, { useEffect, useState } from 'react';
import CommentBox from './components/Commentbox';
import { Comment, Reply } from './components/types';
import './App.css'
// import Particlesp from './components/particles';
import SendComment from './components/addmaincomment';


const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments((prevComments) => {
        if (prevComments.length === 0) {
          return JSON.parse(storedComments);
        }
        return prevComments;
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
    console.log( JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = (commentText: string) => {
    if (commentText.trim() !== '') {
      const newComment: Comment = {
        id: Math.random().toString(),
        name: commentText,
        replies: [],
        
      };
      setComments((prevComments) => [newComment,...prevComments]);
    }
  };
  const handleAddReply = (commentId: string, replyText: string) => {
    if (replyText.trim() !== '') {
      const newReply: Reply = {
        id: Math.random().toString(),
        text: replyText,
      };

      setComments((prevComments) => {
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
  return (
    <div className="App p-10 bg-black border-cyan-50 ">
      {/* <Particlesp /> */}
      <div className="box border ">
      <SendComment handleAddComment={handleAddComment} />
        {comments.map((comment) => (
          <CommentBox key={comment.id} comment={comment} setComments={setComments} 
          handleAddReply={handleAddReply}  />
        ))}
        
      </div>
    </div>
  );
};

export default App;