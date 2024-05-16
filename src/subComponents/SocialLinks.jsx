import { FaSquareXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';

const SocialLinks = () => {
  return (
    <div className="flex justify-between items-center gap-4 mb-3">
      <FaFacebook className="text-white text-xl md:text-3xl lg:text-5xl" />
      <FaSquareXTwitter className="text-white text-xl md:text-3xl lg:text-5xl" />
      <FaInstagram className="text-white text-xl md:text-3xl lg:text-5xl" />
    </div>
  );
}

export default SocialLinks