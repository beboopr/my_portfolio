import React from 'react';
import Logo from '../assets/logo.svg';
// import Edgar from '../assets/edgarlogo.jpg';


const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <a href='#'>
          <img src={Logo} alt=''/>
          {/* <img src={Edgar} alt=''/> */}
        </a>
        {/* button */}
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
