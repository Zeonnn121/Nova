import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Categories from './components/Categories'; // ✅ Import Categories
import Mens from './components/Mens'; // ✅ Fix component name (was "mens")
import Boys from './components/Boys';
import Girls from './components/Girls';
import Couple from './components/Couple';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/categories" element={<Categories />} /> {/* ✅ Fix path */}
          <Route path="/mens" element={<Mens />} /> {/* ✅ Fix component name */}
          <Route path="/Boys" element={<Boys/>} />
          <Route path="/Girls" element={<Girls/>} />
          <Route path="/Couple" element={<Couple/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
