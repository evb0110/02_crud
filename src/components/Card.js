import React from 'react';

export default function Card({post}) {
  return (
    <div className="card">
      <div className="close">
      </div>
      <img className="avatar" src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png" alt="avatar"></img>
      <div className="author">Author: Lorem</div>
      <div>Created: {post.created} ago</div>
      <h1>{post.content}</h1>
    </div>
  );
}
