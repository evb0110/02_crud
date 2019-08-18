import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function CardEdit({match}) {
  const postsUrl = 'http://localhost:7777/posts';
  const [post, setPost] = useState('');
  const id = match.params.id;
  useEffect(() => {
    axios.get(postsUrl).then(res => res.data.find(d => d.id == id)).then(p => setPost(p.content))
  }, [id])

  return (
    <div className="card">
      {post}
    </div>
  );
}
