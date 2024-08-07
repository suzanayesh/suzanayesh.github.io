import React, { useState } from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import Logo from '../assets/logoo.png';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#00000] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '70px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='works' smooth={true} duration={500}>
            Works
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='works' smooth={true} duration={500}>
            Works
          </Link>
        </li>
        <li>
          <div className='pt-5 grid grid-cols-3 gap-8'>
          <a className='flex justify-between items-center w-full text-gray-300 bg-[#333333] px-1' href='https://github.com/suzanayesh' target='_blank' rel="noreferrer">
              Github <FaGithub size={30} />
            </a>
            <a
              className='flex justify-between items-center w-full text-gray-300 bg-blue-600 px-2 py-2'
              href='https://www.linkedin.com/in/suzan-ayesh-169a4725b/' target='_blank' rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
            <a
              className='flex justify-between items-center w-full text-gray-200 bg-[#6fc2b0] px-1'
              href = 'https://drive.google.com/file/d/1jwC73lhbjlC8HyfGE_Bo06gkaePlnVwB/view?usp=sharing' target = "_blank" rel="noreferrer"
            > 
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </div>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/suzan-ayesh-169a4725b' target='_blank' rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/suzanayesh' target='_blank' rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
              href = 'https://drive.google.com/file/d/1jwC73lhbjlC8HyfGE_Bo06gkaePlnVwB/view?usp=sharing' target = "_blank" rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;