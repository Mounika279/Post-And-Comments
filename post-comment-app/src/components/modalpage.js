import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
const ModalPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
 fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
   .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));
  }, [postId]);
  if (!post) {
    return <p>Loading...</p>;
  }
  return (
    <div className='totalmodal'>
  <h5> <Link className='goback' to={`/`}>Go back</Link></h5> 
    <div className='modals'>
      <b >{post.title}</b> 
      <h6>{post.email}</h6> 
      <p>{post.body}</p>
    </div>
    </div>
    
  );
};

export default ModalPage;
