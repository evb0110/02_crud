import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

export default function Create() {
  const [postText, setPostText] = useState('');
  const baseUrl = 'http://localhost:7777';
  const postSuffix = '/posts';

  const handleChange = e => {
    const text = e.target.value;
    setPostText(text);
  };

  const handleClick = () => {
    const postUrl = baseUrl + postSuffix;
    console.log(postUrl);
    const newNote = { id: 0, content: postText };

    axios.post(postUrl, newNote);
  };

  return (
    <div className="card">
      <h1>Create post</h1>
      <textarea rows="6" cols="50" onChange={handleChange} />
      <Link to="/posts" onClick={handleClick}>
        <button className="button">Опубликовать</button>
      </Link>
    </div>
  );
}
