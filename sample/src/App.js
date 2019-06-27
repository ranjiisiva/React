import React from 'react';
import './App.css';
import Joke from './Joke'
import jokesData from './JokesComponents'

function App() {
  const jokes= jokesData.map(joke => <Joke question={joke.question} punchLine={joke.punchLine} />)
  return (
    <div>
      {jokes}
    </div>
  );
}

export default App;
