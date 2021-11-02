import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MonsterProvider } from "./contexts/MonsterContext"
import MonsterList from './components/Monster/MonsterList';

function App() {
  return (
    <div>
      <h1>Monstersiden</h1>
      <MonsterProvider>
        <MonsterList>
          <MonsterList />
        </MonsterList>
      </MonsterProvider>
    </div>
  );
}

export default App;
