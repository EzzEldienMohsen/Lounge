import { Link } from 'react-router-dom';
import { FooterLinks, SocialLinks } from '../subComponents';

const Footer = () => {
  return (
    <div className="bg-[darkblue] border-t-4 border-x-2 border-[wheat] shadow-inner shadow-sky-600 px-4 py-4 flex flex-col justify-center items-start">
      <Link to="/">
        <h1 className="text-2xl md:text-2xl lg:text-4xl text-white font-semibold mb-3">
          AceTech Lounge
        </h1>
      </Link>
      <FooterLinks />
      <SocialLinks/>
    </div>
  );
};

export default Footer;
