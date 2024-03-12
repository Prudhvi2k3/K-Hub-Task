//App.js
import React from 'react';
// import Header from './components/Header/Header';
// import Plot from './components/Plot/Plot';
// import Footer from './components/Footer/Footer';
import Prudhvi from './components/Sidebar';
import Main from './components/Main'
import './App.css';

function App() {
  return (
    <div className="App">
      <Prudhvi/>
      <Main/>
    </div>
  );
}
                    

export default App;