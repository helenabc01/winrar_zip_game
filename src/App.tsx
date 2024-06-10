import React from 'react';
import './App.css';
import { Player } from './components/player';

function App() {

  const players = [{id: 1, color: 'purple'} ,{id: 2, color: 'green'}]
  
  return (
    <div className="App">
     {players.map((e) => <Player id={e.id} color={e.color}/>)} 
    </div>
  );
}

export default App;
