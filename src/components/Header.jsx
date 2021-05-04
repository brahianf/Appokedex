import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '@context/ThemeContext';
import userIcon from '@images/user-icon.jpg';
import Search from '@components/SearchHeader';


const Header = () => {
  const [darkMode, setDarkMode] = useState([false]);
  const color = useContext(ThemeContext);
  const handleClick= () => {
    setDarkMode(!darkMode);
  }

  return (
  <header className="header" style={{backgroundColor: color}}>
    <div className="header__container">
        <Search />
        <Link className='header__brand' to='/'>
          <figure className="logo">
            <img className="logo-image" src={userIcon} alt="Avatar User" />
          </figure>
        </Link>
        {/* <div className='header__button'>
          <button type="button" onClick={handleClick}> {darkMode ? 'DM' : 'LM'} </button>
        </div> */}
    </div>
  </header>
  );
};

export default Header;