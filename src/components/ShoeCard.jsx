import { memo } from 'react';

const ShoeCard = ({
  imgURL: { bigShoe, thumbnail },
  changeBigShoeImage,
  bigShoeImg,
  toggleImg,
  index,
}) => {
  const handleClick = () => {
    toggleImg(false, index);
    const timeoutID = setTimeout(() => {
      changeBigShoeImage(bigShoe);
    }, 200);
  };
  return (
    <div
      className={`flex justify-center items-center bg-card bg-center bg-cover rounded-xl min-h-full min-w-full p-4 border-2 ${
        bigShoeImg === bigShoe
          ? 'border-coral-red'
          : 'border-transparent hover-scale-up'
      } max-sm:flex-1 bg-no-repeat `}
      onClick={handleClick}
    >
      <img
        src={thumbnail}
        alt="shoe collection"
        width={127}
        height={103}
        className="object-contain"
      />
    </div>
  );
};
export default memo(ShoeCard);
