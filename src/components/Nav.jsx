import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="logo" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden block">
          <img src={hamburger} width={25} height={25} alt="" />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
