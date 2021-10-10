import React from "react";
import Header from './components/Header';
import Background from './components/Background';
import Contents from './components/Contents';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Contents />
    </div>
  );
}

export default App;