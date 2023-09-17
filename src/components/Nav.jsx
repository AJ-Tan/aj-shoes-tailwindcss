import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [headerColor, setHeaderColor] = useState('bg-transparent');
  const [linkPosition, setLinkPosition] = useState('home');

  useEffect(() => {
    const allSection = document.querySelectorAll('main header ~ section');
    const navScrollEvent = () => {
      if (window.scrollY > 100) {
        setHeaderColor('bg-slate-100');
      } else {
        setHeaderColor('bg-transparent');
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

        if (top > -100 && top < 200) {
          if (navLinkList.includes(item.id)) setLinkPosition(item.id);
        }
      });
    };

    window.addEventListener('scroll', navScrollEvent);
    return () => {
      window.removeEventListener('scroll', navScrollEvent);
    };
  }, []);

  return (
    <header
      id="header"
      className={`padding-x py-3 z-10 w-full fixed z-50 ${headerColor} transition duration-500`}
    >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="logo" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className={`font-montserrat leading-normal text-lg text-slate-gray block transition duration-100 transform hover:scale-105 hover:font-semibold ${
                  linkPosition === href.slice(1) && 'scale-105 font-semibold'
                }`}
                onClick={() => setLinkPosition(href.slice(1))}
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
