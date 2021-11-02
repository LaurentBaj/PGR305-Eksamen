import React from 'react';
import { MonsterProvider } from './contexts/MonsterContext';
import MonsterList from './components/Monster/MonsterList';

function App() {
  return (
    <div>
      <h1>Monstersiden</h1>
      <MonsterProvider>
        <MonsterList></MonsterList>
      </MonsterProvider>
    </div>
  );
}

export default App;
