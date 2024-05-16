import React from 'react'
import { menuItems } from "../assets";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Menu = () => {
    React.useEffect(() => {
    AOS.init();
    AOS.refresh();},[])
  return (
    <div className="about-board flex flex-col justify-center items-center px-4 py-2 ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl capitalize text-[blue] font-semibold">
        our menu
      </h1>
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="flex flex-col justify-center items-center md:grid md:grid-cols-2  lg:flex lg:flex-row lg:flex-wrap md:gap-x-10 md:gap-y-4 lg:gap-4 mt-4"
      >
        {menuItems.map((item) => {
          return (
            <div
              data-aos="flip-up"
              data-aos-duration="2000"
              key={item.id}
              className="m-6 rounded-md shadow-inner shadow-[blue] motion px-4 py-6 border-2 border-[darkblue]"
            >
              <img
                src={item.img}
                alt="menu"
                className="w-40 h-48 md:w-60 md:h-64 lg:w-80 lg:h-96 rounded-md shadow-md shadow-[skyblue] hover:scale-110"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu