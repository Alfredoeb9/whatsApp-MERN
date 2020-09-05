import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="App">
      <h1>whats up man</h1>

      {/* Sidebar */}
      <Sidebar />
      {/* Chat component */}
      <Chat />
    </div>
  );
}

export default App;
