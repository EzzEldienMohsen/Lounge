import { memberships } from '../assets';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Memberships = () => {
     React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
 <div className="bg-white border-t-4 border-[white] shadow-inner shadow-[wheat] px-2 py-4 flex flex-col justify-center items-center rounded-t-md">
        <h1 className="text-[darkblue] text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest capitalize mb-4">
          our membership
        </h1>
        <div
          data-aos="flip-up"
          data-aos-duration="2000"
          className="flex flex-col justify-center items-center  md:flex md:flex-row md:flex-wrap md:justify-between "
        >
          {memberships.map((member) => {
            return (
              <div
                key={member.id}
                className="motion flex flex-col justify-evenly items-center md:ml-6 mb-4 md:h-[380px]  md:w-2/5 lg:h-[400px] bg-transparent shadow-md shadow-[darkblue] border-[2px] rounded-lg border-[blue] px-6 py-2"
              >
                <img
                  src={member.img}
                  alt="image"
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full mb-4"
                />
                <h2 className="text-xl md:text-2xl lg:text-3xl uppercase text-[blue] font-semibold tracking-wide mb-4">
                  {member.title}
                </h2>
                <ul className="list-disc text-[blue] text-sm md:text-md lg:text-xl font-normal tracking-normal">
                  {member.list.map((li) => {
                    return <li key={li.id}>{li.li}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>  )
}

export default Memberships