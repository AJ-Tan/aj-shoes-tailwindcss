import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className="">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} alt="" />
          </a>
          <p className="text-white mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest AJ Shoes store.
            Find your perfect Size in Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map(({ src, alt }) => (
              <div
                key={src}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={src} alt={alt} width={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map(({ title, links }, index) => (
            <div key={index}>
              <h4 className="text-white text-2xl font-medium font-montserrat tracking-wide uppercase mb-6">
                {title}
              </h4>
              <ul className="">
                {links.map(({ name, link }) => (
                  <li key={name} className="mt-1">
                    <a
                      className="text-white-400 font-montserrat text-base hover:text-slate-500"
                      href={link}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-white-400 mt-24 flex justify-between max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </section>
  );
};
export default Footer;
