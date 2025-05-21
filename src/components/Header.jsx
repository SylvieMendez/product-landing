/* import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  const navLinks = ['Home', 'Treats', 'Pricing', 'Delivery', 'Contact'];

  return (
    <header className="fixed w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">SylvsLux</h1>
        <nav>
          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-gray-700 hover:text-pink-600 cursor-pointer"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <button onClick={toggleNav}>
              {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {navOpen && (
        <ul className="md:hidden bg-white px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link} className="py-2">
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={toggleNav}
                className="text-gray-700 hover:text-pink-600 cursor-pointer"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
*/
// src/components/Header.jsx
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  const navLinks = ['Home', 'Treats', 'Pricing', 'Delivery', 'Contact'];

  return (
    <header className="fixed w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">Treat Drop</h1>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-gray-700 hover:text-pink-600 font-medium cursor-pointer capitalize"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden text-gray-700">
          <button onClick={toggleNav}>
            {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {navOpen && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={toggleNav}
              className="block text-gray-700 hover:text-pink-600 font-medium cursor-pointer capitalize"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
