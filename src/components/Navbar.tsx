import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-600">NOVA</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/Mens" className="text-gray-700 hover:text-purple-600">Mens</Link>
            <Link to="/Boys" className="text-gray-700 hover:text-purple-600">Boys</Link>
            <Link to="/Girls" className="text-gray-700 hover:text-purple-600">Girls</Link>
            <Link to="/Couple" className="text-gray-700 hover:text-purple-600">Couple</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => navigate('/profile')}
              className="text-gray-700 hover:text-purple-600"
            >
              <User size={24} />
            </button>
            <button className="text-gray-700 hover:text-purple-600">
              <ShoppingBag size={24} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Mens</Link>
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Boys</Link>
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Girls</Link>
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Couple</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;