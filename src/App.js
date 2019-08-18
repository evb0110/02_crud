import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Card from './components/Card';
import Create from './components/Create';
import CardEdit from './components/CardEdit';

// const data = [
//   {
//     id: 1,
//     content: 'Какая-то фигня',
//     created: '5 мин',
//   },
//   {
//     id: 2,
//     content: 'Очень важный текст',
//     created: '10 мин',
//   },
// ];

function App() {
  const postsUrl = 'http://localhost:7777/posts';
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(postsUrl).then(response => setData(response.data));
  });

  return (
    <div className="App">
      <Router>
        <Link to="/posts">
          <button className="button">Домашняя страница</button>
        </Link>
        <Link to="/posts/new">
          <button className="button">Создать пост</button>
        </Link>
        <Switch>
        <Route path="/posts/new" exact component={Create} />
        <Route path="/posts/:id" exact component={CardEdit} />
          <Route
            path="/posts"
            exact
            component={() => data.map(post => <Card post={post} />)}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
