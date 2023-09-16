import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {
  const [bigShoeImg, changeBigShoeImage] = useState(bigShoe1);
  const [{ heroImgOpacity, heroImgTranslate, afterIndex }, setHeroImgClass] =
    useState({
      heroImgOpacity: 'opacity-0',
      heroImgTranslate: 'translate-x-0',
      beforeIndex: -1,
      afterIndex: 0,
    });

  const toggleImg = (isVisible, index = -1) => {
    if (index === afterIndex) return;

    if (isVisible) {
      setHeroImgClass((prev) => {
        return {
          ...prev,
          heroImgOpacity: 'opacity-0',
          heroImgTranslate:
            prev.beforeIndex > prev.afterIndex
              ? '-translate-x-10'
              : 'translate-x-10',
        };
      });

      setTimeout(() => {
        setHeroImgClass((prev) => ({
          ...prev,
          heroImgOpacity: 'opacity-1',
          heroImgTranslate: 'translate-x-0',
        }));
      }, 300);
    } else {
      setHeroImgClass(({ afterIndex }) => {
        return {
          heroImgOpacity: 'opacity-0',
          heroImgTranslate:
            afterIndex > index ? 'translate-x-10' : '-translate-x-10',
          beforeIndex: afterIndex,
          afterIndex: index,
        };
      });
    }
  };

  return (
    <section
      id="home"
      className="flex xl:flex-row flex-col min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 transform scale-105">
            The New Arrival <br />{' '}
          </span>
          <span className="mt-3 text-coral-red inline-block">Nike </span> Shoes
        </h1>
        <p className="font-montserrat sm:max-w-sm text-slate-600 text-lg mt-6 mb-14 leading-8">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map(({ value, label }) => (
            <div key={label}>
              <p className="font-palanquin text-4xl font-bold">{value}</p>
              <p className="leading-7 font-montserrat text-slate-600">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          id="hero-img"
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className={`object-contain relative z-10 transition duration-500 transform ${heroImgOpacity} ${heroImgTranslate}`}
          onLoad={() => toggleImg(true)}
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={changeBigShoeImage}
                bigShoeImg={bigShoeImg}
                toggleImg={toggleImg}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
