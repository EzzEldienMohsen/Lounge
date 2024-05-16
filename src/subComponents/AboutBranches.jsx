import React from 'react'
import { branches } from '../assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutBranches = () => {
    React.useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <div className="px-4 py-4 bg-[blue] shadow-inner shadow-[wheat] flex flex-col justify-center items-center rounded-lg">
      <h1
        data-aos="flip-up"
        data-aos-duration="2000"
        className="text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wider"
      >
        Our Branches
      </h1>
      <div className="mt-2 flex flex-col justify-center items-center px-2 py-2 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap">
        {branches.map((branch) => {
          return (
            <div
              data-aos="flip-up"
              data-aos-duration="500"
              key={branch.id}
              className="border-2 border-white px-4 py-4 flex flex-col justify-center items-center md:mr-4 lg:mr-0 mt-4 rounded-md shadow-md shadow-[wheat]"
            >
              <h1 className="text-white text-lg md:text-xl lg:text-2xl tracking-wide font-semibold motion">
                {branch.title}
              </h1>
              <p className="text-white text-md md:text-lg lg:text-xl font-light tracking-normal motion">
                {branch.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutBranches