import React from 'react';
import './App.css';

import Card from './components/Card';

const data = [
  {
    id: 1,
    content: 'Какая-то фигня',
    created: '5 мин',
  },
  {
    id: 2,
    content: 'Очень важный текст',
    created: '10 мин',
  },
];

function App() {
  return (
    <div className="App">
      {data.map(post => (
        <Card post={post} />
      ))}
    </div>
  );
}

export default App;
