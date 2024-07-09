import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CommentsPage = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error', error));
  }, [postId]);

  const addComment = () => {
    if (!newComment) return;
    setComments([...comments, {name: newComment }]);
    setNewComment('');
  }

  return (
    <div className='grpcomments'>
      <h2 className='title'>Comments for Post : {postId}</h2>
      <ul>
        {comments.map(comment => (
          <div key={comment.id}>
            <h6 className='comments'>{comment.name}</h6>   
          </div>
         
        ))}
      </ul>
      <input  className="inputs"type="text"value={newComment}
        onChange={e => setNewComment(e.target.value)} placeholder="Enter your comment"/>
      <button className='submitt' onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default CommentsPage;
