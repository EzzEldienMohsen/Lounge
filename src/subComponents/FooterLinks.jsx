import { Link } from 'react-router-dom';
import { links } from '../assets';
const FooterLinks = () => {
  return (
    <div className="flex justify-between items-center gap-4 mb-3">
      {links.map((link) => {
        return (
          <Link
            key={link.id}
            to={link.to}
            className="text-xs md:text-lg lg:text-2xl text-[white]  capitalize last:bg-gray-600 last:text-white last:px-2 last:py-2 last:text-center  last:rounded-lg hover:text-[skyblue] last:hover:text-[skyblue] last:hover:[bg-gray-700]"
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default FooterLinks;
