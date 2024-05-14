import { FaBars } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { links } from '../assets';
const NavBarMedium = () => {
  return (
    <div className="dropdown dropdown-end lg:hidden">
      <div tabIndex={0} role="button" className="">
        <FaBars className="w-10 h-10 md:w-12 md:h-12 text-[darkblue] focus:text-[blue]" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[90vw]"
      >
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              to={link.to}
              className="text-2xl capitalize last:bg-gray-600 last:text-white last:px-2 last:py-2 last:text-center  last:rounded-lg hover:text-[blue] last:hover:text-[skyblue] last:hover:bg-gray-700 my-2"
            >
              {link.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default NavBarMedium