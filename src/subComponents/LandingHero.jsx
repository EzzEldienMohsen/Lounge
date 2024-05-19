import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
const LandingHero = () => {
    React.useEffect(() => {
    AOS.init();
    AOS.refresh();},[])
  return (
    <div className=" mt-[80px] md:mt-[96px] lg:mt-[114px] hero-section flex flex-col justify-center items-center gap-4 md:gap-8 jg:gap-12 shadow-inner shadow-[darkblue] py-8 px-4">
      <h1
        data-aos="fade-up"
        data-aos-duration="2000"
        className="capitalize text-[darkblue] text-2xl md:text-3xl lg:text-4xl text-center"
      >
        we provide the best lounge services that could be
      </h1>
      <p
        data-aos="fade-down"
        data-aos-duration="2000"
        className="capitalize text-[darkblue] text-lg md:text-xl lg:text-2xl text-center"
      >
        our motto is relaxing, cool time and unforgettable times
      </p>
      <Link
        data-aos="fade-up"
        data-aos-duration="2000"
        to="/booking"
        className="bg-[blue] text-white p-4 rounded-3xl hover:bg-[#1a5061] hover:text-[#ffffffc4] focus:bg-white focus:text-[blue] capitalize flex gap-4 justify-center items-center text-xl motion"
      >
        <p className="mb-1">try now</p>
        <MdKeyboardArrowRight className="text-2xl" />
      </Link>
    </div>
  );
};

export default LandingHero;
