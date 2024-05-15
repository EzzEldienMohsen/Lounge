import React from 'react';
import {  logo } from '../assets';
import { NavBarLarge, NavBarMedium } from '../subComponents';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';


const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200;
      setIsScrolled(scrollPosition > threshold);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <motion.header
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      initial="bg-transparent"
      animate={isScrolled ? 'bg-white' : 'bg-transparent'}
      className={`fixed top-0 left-0 z-30 w-full border-b-4 border-slate-300 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="flex justify-between items-center px-6 py-4"
      >
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full shadow-lg shadow-[skyblue] motion"
        />
        <NavBarLarge />
       <NavBarMedium/>
      </div>
    </motion.header>
  );
};

export default Header;
