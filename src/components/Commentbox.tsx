// import React, { useEffect, useState } from 'react';
// import { Comment } from './types';
// import Buttonb from './button';
// import Button from '@mui/material/Button';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import SendIcon from '@mui/icons-material/Send';
// import Confetti from 'react-confetti';

// interface CommentboxProps {
//   comment: Comment;
// }

// const Commentbox = (props: CommentboxProps) => {
//   const [input, setInput] = useState('');
//   const [showInputBox, setShowInputBox] = useState(false);
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [isLiked, setIsLiked] = useState(false);
//   const [showConfetti, setShowConfetti] = useState(false);

//   const handlenewComment = () => {
//     setShowInputBox(true);
//   };


//   // useEffect(() => {
//   //   // Load comments from local storage on component mount
//   //   const storedComments = localStorage.getItem('comments');
//   //   if (storedComments) {
//   //     setComments((prevComments) => {
//   //       if (prevComments.length === 0) {
//   //         return JSON.parse(storedComments);
//   //       }
//   //       return prevComments;
//   //     });
//   //   }
//   // }, []);

//   // useEffect(() => {
//   //   // Save comments to local storage whenever comments state changes
//   //   localStorage.setItem('comments', JSON.stringify(comments));
//   //   console.log( JSON.stringify(comments));
//   // }, [comments]);


//   const handleAddComment = () => {
//     if (input.trim() !== '') {
//       const newComment: Comment = {
//         id: Math.random().toString(),
//         name: input
//       };
//       setComments((prevComments) => [newComment, ...prevComments]);
//       setInput('');
//     }
//   }

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     setShowConfetti(true);

//     setTimeout(() => {
//       setShowConfetti(false);
//     }, 3000);
//   };

//   return (
//     <div className="comment-box">
//         <>
//           <div>
//             <div className="relative inline-block w-auto mx-auto m-2 bg-slate-400 rounded-xl pt-3">
//               <div style={{ overflowWrap: 'break-word' }} className="p-2 pl-5 box2 ">
//                 {props.comment.name}
//               </div>
//               <div className="flex p-2">
//                 {/* <Buttonb
//                   type="Reply"
//                   className="reply mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//                   icon="reply"
//                   handleClick={handlenewComment}
//                 /> */}

//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       icon={<FavoriteBorderIcon />}
//                       checkedIcon={<FavoriteIcon color="error" />}
//                       name="checkedH"
//                       onClick={handleLike}
//                     />
//                   }
//                   label="."
//                 />
//               </div>
//             </div>
//           </div>
//         </>

//       <div className="pl-4 border-l">
//         {showInputBox && (
//           <div className="box2">
//             <input
//               type="text"
//               value={input}
//               autoFocus
//               className="bg-gray-50 border border-amber-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="type.."
//               onChange={(e) => setInput(e.target.value)}
//             />
//             <div className="flex">
//               <Buttonb
//                 type="save"
//                 className="save m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//                 icon="save"
//                 handleClick={() => {
//                   setShowInputBox(false);
//                   handleAddComment();
//                 }}
//               />
//               <Buttonb
//                 type="cancel"
//                 className="cancel m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
//                 icon="cancel"
//                 handleClick={() => {
//                   setShowInputBox(false);
//                   setInput('');
//                 }}
//               />
//             </div>
//           </div>
//         )}

//         {comments.map((nestedComment) => (
//           <Commentbox key={nestedComment.id} comment={nestedComment} />
//         ))}
//       </div>

//       {showConfetti && (
//         <div className="confetti-container">
//           <Confetti />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Commentbox;


import React, { useEffect, useState } from 'react';
import { Comment, Reply } from './types';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Confetti from 'react-confetti';
import Buttonb from './button';
import ReplyComment from './reply';

interface CommentboxProps {
  comment: Comment;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>; // Include setComments prop
  handleAddReply: (commentId: string, replyText: string) => void;
}

const Commentbox: React.FC<CommentboxProps> = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };
  const handleToggleReplyForm = () => {
    setShowReplyForm(!false);
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
<div className="comment-box">
      <div>
        <div className="relative inline-block w-auto mx-auto m-2 bg-slate-400 rounded-xl pt-3">
          <div style={{ overflowWrap: 'break-word' }} className="p-2 pl-5 box2 ">
            {props.comment.name}
          </div>
          <div className="flex p-2">
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorderIcon />}
                  checkedIcon={<FavoriteIcon color="error" />}
                  name="checkedH"
                  onClick={handleLike}
                />
              }
              label="."
            />

             <Buttonb
                  type="Reply"
                  className="reply mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  icon="reply"
                  handleClick={handleToggleReplyForm}
                />

<Buttonb
                  type="Delet"
                  className="reply mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  icon="delet"
                  handleClick={handleDeleteComment(props.comment.id)}
                />
          </div>
        
        </div>
      </div>

      {showConfetti && (
        <div className="confetti-container">
          <Confetti />
        </div>
      )}
       {props.comment.replies.map((reply) => (
          <div key={reply.id} className="reply-container bg-blue-200 ml-7">
            <span>{reply.text}</span>
            <Buttonb type='dum' icon='dum'  
            handleClick={handleDeleteReply(props.comment.id, reply.id)} className="w-2.5  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"/>
          </div>
        ))}
    </div>
    {showReplyForm && <ReplyComment handleAddReply={handleAddReply} commentId={props.comment.id} />}
</div>
    
  );
};

export default Commentbox;

