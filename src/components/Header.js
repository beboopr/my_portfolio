import React from 'react';
import Logo from '../assets/logo.svg';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <a href='#' alt=''>
          <img src={Logo} alt=''/>
        </a>
        {/* button */}
        <a href='https://www.linkedin.com/in/edgar-david/'>
        <button className='btn btn-sm'>Work with me</button>
        </a>
      </div>
    </div>
  </header>;
};

export default Header;
