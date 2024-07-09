import React, { useState } from 'react';

const PostsPage = () => {
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPost, setNewPost] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddNewPost = () => {
    setShowNewPost(true);
  };

  const handlePost = (e) => {
    setNewPost(e.target.value);
  };

  const handleDescription = (e) => {
    setNewDescription(e.target.value);
  };

  const handlePostSubmit = (e) => { e.preventDefault();
    setNewPost('');
    setNewDescription('');
    setShowNewPost(false);
  };

  return (
    <div className="posts-page">
      <h2>Posts</h2>

      {!showNewPost && (
        <button onClick={handleAddNewPost}>Add New Post</button>
      )}

      {showNewPost && (
        <form onSubmit={handlePostSubmit}>
          <input
            type="text" className='firsts' value={newPost} onChange={handlePost}
            placeholder="Enter new title"
          />
          <input
            type="text"  className='seconds' value={newDescription} onChange={handleDescription}
            placeholder="Enter new description"
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default PostsPage;
