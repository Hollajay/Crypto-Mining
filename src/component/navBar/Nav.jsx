import { Link } from 'react-router-dom';
import './nav.css';
import { useState, useEffect } from 'react';

export const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  const handleScroll = () => {
    setNavbar(window.scrollY >= 60);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [showMenu, setShowMenu] = useState(false); // Initially set to false

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <section className={navbar ? 'navSection nav_on_scroll' : 'navSection'}>
      <nav className="navClasses">
        <div className="logoDiv">
        <img src="https://i.postimg.cc/prrVjsHG/Luxi-Hosting-Logo.png" alt="" />
          <h1>CRYPTO</h1>
        </div>
        <div className="nav_toggle">
          <input type="checkbox" id="checkbox_toggle" onClick={toggleMenu} />
          <label className="toggle_label" htmlFor="checkbox_toggle">
            <div className="bars_label" id="bar1"></div>
            <div className="bars_label" id="bar2"></div>
            <div className="bars_label" id="bar3"></div>
          </label>
        </div>
        <section className={`nav_link_section ${showMenu ? "show-menu" : ""}`}>
          <ul className="navLinks">
            <li onClick={closeMenuOnMobile}>Buy & Sell</li>
            <li onClick={closeMenuOnMobile}>Growth</li>
            <li onClick={closeMenuOnMobile}>Markets</li>
            <li onClick={closeMenuOnMobile}>Business</li>
            <li onClick={closeMenuOnMobile}>Supports</li>
          </ul>
          <div className="logIn_Btn_div">
            <Link to="/login">
              <button className="signIn_btn">Sign In</button>
            </Link>
            <Link to="/signUp">
              <button className="signUp_btn">Sign Up</button>
            </Link>
          </div>
        </section>
      </nav>
    </section>
  );
};

export default Nav;
