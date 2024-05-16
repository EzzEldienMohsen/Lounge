import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutHero = () => {
    React.useEffect(() => {
    AOS.init();
    AOS.refresh();},[])
  return (
    <div
      data-aos="zoom-out"
      data-aos-duration="2000"
      className="flex flex-col justify-center items-center px-2 py-4 aboutHero shadow-xl shadow-[darkblue] motion rounded-md"
    >
      <h1
        data-aos="flip-up"
        data-aos-duration="2000"
        className="text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wider mb-3"
      >
        About Us
      </h1>
      <p className="text-md md:text-lg lg:text-xl font-semibold text-[black] capitalize ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        debitis quis, ducimus laboriosam voluptatum quibusdam. Quo blanditiis ex
        soluta dicta unde itaque minima, et voluptatum perferendis commodi ad
        harum odit dolore rem quos cum sint ipsam nulla id omnis quia placeat
        voluptates temporibus repellat? Minus molestias iusto, amet facere
        laudantium quod eos totam consequuntur dolor perspiciatis suscipit
        placeat blanditiis sit maxime mollitia saepe vitae molestiae!
        Consequatur quo error blanditiis molestiae quis hic corporis debitis
        iusto commodi quidem odit enim cumque optio adipisci, voluptas sed
        placeat! Suscipit molestiae, ad cupiditate vitae est temporibus quam
        magnam labore omnis dolores debitis, amet in!
      </p>
    </div>
  );
}

export default AboutHero