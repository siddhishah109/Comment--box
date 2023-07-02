import React, { useState } from 'react';
import CommentBox from './components/Commentbox';
import { Comment } from './components/types';

function App() {
  const [commentD, setCommentD] = useState<Comment>({
    id: '1',
    name: 'caf',
    item: [
      {
        id: '234',
        name: "hii",
        item: [
          {
            id: '2937290',
            name: "hello",
            item: [
              {
                id: '945720',
                name: "sdfs",
                item: []
              }
            ]
          }
        ]
      }
    ]
  });

  return (
    <>
      <CommentBox comment={commentD} />
    </>
  );
}

export default App;
