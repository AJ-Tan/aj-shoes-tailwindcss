import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [{ isNavTransparent, navDisplay, isLarge }, setNavClass] = useState({
    isNavTransparent: 'bg-transparent',
    navDisplay: window.innerWidth >= 1024 ? true : false,
    isLarge: window.innerWidth >= 1024 ? true : false,
  });
  const [linkPosition, setLinkPosition] = useState('home');

  useEffect(() => {
    const allSection = document.querySelectorAll('main header ~ section');

    const navScrollEvent = () => {
      if (window.scrollY > 100) {
        setNavClass((prev) => ({ ...prev, isNavTransparent: false }));
      } else {
        setNavClass((prev) => ({ ...prev, isNavTransparent: true }));
      }

      allSection.forEach((item) => {
        const top = item.getBoundingClientRect().top;
        const navLinkList = [
          'home',
          'products',
          'about-us',
          'special-offer',
          'contact-us',
        ];

        if (top > -100 && top < 300) {
          if (navLinkList.includes(item.id)) {
            setLinkPosition(item.id);
            window.history.replaceState(null, 'navigation', `#${item.id}`);
          }
        }
      });
    };

    window.addEventListener('scroll', navScrollEvent);

    return () => {
      window.removeEventListener('scroll', navScrollEvent);
    };
  }, []);

  useEffect(() => {
    const windowResize = () => {
      if (window.innerWidth >= 1024 && isLarge === false) {
        setNavClass((prev) => ({ ...prev, navDisplay: true, isLarge: true }));
      } else if (window.innerWidth < 1024 && isLarge === true) {
        const navList = document.getElementById('nav-list');

        setNavClass((prev) => ({ ...prev, navDisplay: false, isLarge: false }));
      }
    };

    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, [isLarge]);

  return (
    <header
      id="header"
      className={`padding-x py-3 w-full fixed z-50 ${
        (isNavTransparent && (!navDisplay || isLarge)) ? 'bg-transparent' : 'bg-slate-100'
      } transition duration-300`} //prettier-ignore
    >
      <nav className="flex justify-between items-center max-container relative">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="logo" />
        </a>

        <ul
          id="nav-list"
          className={`absolute w-56 pl-14 py-16 flex \
          ${
            (navDisplay || isLarge ) ? 'flex' : 'hidden'
          } ${((!navDisplay || isLarge)) ? 'bg-transparent' : 'animate-fadeInUpToDown bg-slate-100'} 
          flex-col gap-y-16 -right-[64px] top-[90px] max-sm:-right-[32px]
          lg:static !lg:opacity-1 !lg:translate-y-0 lg:flex-row lg: lg:gap-16 lg:items-center lg:justify-center lg:p-0 lg:flex-1`} //prettier-ignore
        >
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className={`font-montserrat leading-normal text-lg text-slate-gray block transition duration-100 transform hover:scale-105 hover:font-semibold ${
                  linkPosition === href.slice(1) && 'scale-105 font-semibold'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden block">
          <img
            src={hamburger}
            width={25}
            height={25}
            alt=""
            onClick={() =>
              setNavClass((prev) => ({ ...prev, navDisplay: !prev.navDisplay }))
            }
          />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
