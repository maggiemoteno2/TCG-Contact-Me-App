import React from 'react';
import logo from './logo.svg';
import './App.css';
import route from './routes/switchRoutes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {route()}
      </header>
    </div>
  );
}

export default App;
