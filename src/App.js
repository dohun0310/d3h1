import React from "react";
import Header from './components/Header';
import Background from './components/Background';
import Contents from './components/Contents';
import Index from './components/Index'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Contents />
      <Index />
    </div>
  );
}

export default App;