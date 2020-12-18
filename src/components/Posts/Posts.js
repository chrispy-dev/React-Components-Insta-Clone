import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts, searchTerm, commentText, handleCommentTextChange } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {
        searchTerm
        ? posts.filter(post => post.username.includes(searchTerm))
        .map(post => <Post key={post.id} post={post} likePost={likePost} />)
        : posts.map(post => (
          <Post 
            key={post.id} 
            post={post} 
            likePost={likePost} 
            commentText={commentText} 
            handleCommentTextChange={handleCommentTextChange} />
        ))
      }
    </div>
  );
};

export default Posts;
