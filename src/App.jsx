import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import Accueil from './views/Accueil';
import Menu from './views/Menu';
import Noodle from './views/Noodle';
import Restaurants from './views/Restaurants';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/noodle" element={<Noodle />} />
          <Route path="/restaurants" element={<Restaurants />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
