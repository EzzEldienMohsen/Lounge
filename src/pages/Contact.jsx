import { ReachOut, SendForm, SocialLinks } from '../subComponents';



const Contact = () => {
   
  return (
    <div className="mt-[80px] md:mt-[96px] motion lg:mt-[114px] bg-[blue] flex flex-col justify-center items-center px-4 py-8 shadow-inner shadow-white border-t-4 border-[wheat]">
      <h1 className="text-2xl md:text-3xl lg:Text-4xl text-white font-bold tracking-wider mb-4">
        Contact Us
      </h1>
      <div className="flex flex-col justify-center items-center  w-full">
        <ReachOut />
        <SendForm />
        <SocialLinks />
      </div>
    </div>
  );
}

export default Contact