import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import Accueil from './views/Accueil';
import Menu from './views/Menu';
import Noodle from './views/Noodle';
import Restaurants from './views/Restaurants';
import Contact from './views/Contact';
import Mentions from './views/Mentions';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <MainNavbar />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/noodle" element={<Noodle />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions" element={<Mentions />} />
          </Routes>
        </Router>
      </div>
    </>

  );
}

export default App;


