import React, { useContext, useEffect, useState } from "react";
import { FaAlignRight, FaRegMoon, FaSun, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user, logout} = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleDarkMode = ()=> {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Add or remove "dark-mode" class based on user preference and state
    if (prefersDarkMode || isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

const handleLogout = () => {
  logout(() => {
    console.log("logout successful");
  })
}

  return (
      <div
      
      className=" max-w-7xl mx-auto"
    >
      <nav className=" px-20 flex justify-between items-center">
        <div className="py-5 text-green-500 font-extrabold text-4xl">
          <Link to="/">
            <span className="text-black">Chef</span>Legend
          </Link>
        </div>
        <div>
          <ul className="hidden lg:flex items-center space-x-6 font-semibold">
            
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600"
                    : "hover:text-green-600 ease-in duration-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600"
                    : "hover:text-green-600 ease-in duration-200"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600"
                    : "hover:text-green-600 ease-in duration-200"
                }
              >
                Blog
              </NavLink>
            </li>

            <li>
              {user ? <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img title={user && user.displayName} src={user && user.photoURL} />
                  </div>
                </label>
                <ul 
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-indigo-300 rounded-box w-52"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout} to="/login">Logout</Link>
                  </li>
                </ul>
              </div> : <Link to="/login"><button className="bg-green-500 px-5 py-2 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
               Login
              </button></Link> }
            </li>
            <li>
              {
                isDarkMode ? <button onClick={toggleDarkMode}><FaSun className=" w-6 text-white h-6 mt-3" /></button> : <button onClick={toggleDarkMode}><FaRegMoon className=" w-6 text-black h-6 mt-3"  /></button>
              }
            
            
            </li>
          </ul>
        </div>

        {/* Mobile Screen */}
        <div  className="lg:hidden cursor-pointer ml-10 z-50">
          <button
            title={!isMenuOpen ? "Open Menu" : "Close Menu"}
            aria-label={!isMenuOpen ? "Open Menu" : "Close Menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen ? (
              <FaAlignRight className="h-6 w-6 text-black" />
            ) : (
              <FaTimes className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-indigo-300 h-96 opacity-90 z-30 absolute inset-0">
            <ul className=" grid place-items-center py-20">
              <li className="font-semibold mt-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600"
                      : "hover:text-green-600 ease-in duration-200"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="font-semibold mt-3">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600"
                      : "hover:text-green-600 ease-in duration-200"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="font-semibold mt-3">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600"
                      : "hover:text-green-600 ease-in duration-200"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
              <li>
              {user ? <div title={user && user.displayName} className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user && user.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-indigo-800 rounded-box w-52"
                >
                  <li className="text-white">
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li className="text-white">
                    <Link onClick={handleLogout} to="/login">Logout</Link>
                  </li>
                </ul>
              </div> : <Link to="/login"><button className="bg-green-500 px-5 py-2 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
               Login
              </button></Link> }
            </li>
              </li>
              <li>
              {
                isDarkMode ? <button onClick={toggleDarkMode}><FaSun className=" w-6 text-white h-6 mt-3" /></button> : <button onClick={toggleDarkMode}><FaRegMoon className=" w-6 text-black h-6 mt-3"  /></button>
              }
            
            </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
