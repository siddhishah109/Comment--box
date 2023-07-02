import React from 'react';
import CommentBox from './components/Commentbox';
import { Comment } from './components/types';

const App: React.FC = () => {
  const initialComment: Comment = {
    id: '1',
    name: 'Initial Comment',
    item: [],
  };

  return (
    <div className="App">
      <h1>Comments</h1>
      <CommentBox comment={initialComment} />
    </div>
  );
};

export default App;