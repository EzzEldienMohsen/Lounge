import { banner } from '../assets';

const LandingAbout = () => {
  return (
    <div className="bg-[lightblue] flex flex-col justify-center items-center px-4 py-8 shadow-inner shadow-[white] ">
      <div className="bg-white border-[skyblue] border-4 rounded-lg motion shadow-lg shadow-[blue] flex flex-col justify-center items-center px-2 py-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[darkblue] capitalize">
          who we are?
        </h1>
        <div className="mt-4 flex flex-col justify-center items-center md:flex-row md:justify-between">
          <p className="text-md md:text-lg lg:text-xl font-light text-[darkblue] capitalize md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis debitis quis, ducimus laboriosam voluptatum quibusdam.
            Quo blanditiis ex soluta dicta unde itaque minima, et voluptatum
            perferendis commodi ad harum odit dolore rem quos cum sint ipsam
            nulla id omnis quia placeat voluptates temporibus repellat? Minus
            molestias iusto, amet facere laudantium quod eos totam consequuntur
            dolor perspiciatis suscipit placeat blanditiis sit maxime mollitia
            saepe vitae molestiae! Consequatur quo error blanditiis molestiae
            quis hic corporis debitis iusto commodi quidem odit enim cumque
            optio adipisci, voluptas sed placeat! Suscipit molestiae, ad
            cupiditate vitae est temporibus quam magnam labore omnis dolores
            debitis, amet in!
          </p>
          <img
            src={banner}
            alt="banner"
            className="md:w-1/2 lg:w-3/5 lg:h-96 md:h-[500px] ml-4 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
