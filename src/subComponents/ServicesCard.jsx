import { serviceCard } from '../assets';

const ServicesCard = () => {
  return (
    <div className="mt-2 border-2 border-[blue] shadow-inner shadow-sky-400 px-4 py-2 rounded-t-md flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider text-[darkblue] capitalize mb-2">
        our services
      </h1>
      <div className="flex flex-col justify-center items-center w-full">
        {serviceCard.map((card) => {
          return (
            <div
              key={card.id}
              className="flex  w-full flex-col md:odd:flex-row md:even:flex-row-reverse items-center justify-center md:items-between md:justify-between px-2 py-2 my-2 odd:bg-white odd:text-sky-600 even:bg-sky-600 even:text-white"
            >
              <div className="flex flex-col justify-start items-items-start p-2">
                <h1 className="text-xl md:tex-2xl lg:text-3xl font-normal tracking-normal mb-4">
                  {card.title}
                </h1>
                <p className="text-md md:text-jg lg:text-xl font-light mb-2 md:mb-0">
                  {card.text}
                </p>
              </div>
              <div
                className={`w-1/2  md:flex ${
                  card.id % 2 === 0 ? '' : 'md:justify-end'
                } md:items-center`}
              >
                <img
                  src={card.img}
                  alt="image"
                  className="w-36 h-20 md:w-40 md:h-40   lg:w-96 lg:h-96"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCard;
